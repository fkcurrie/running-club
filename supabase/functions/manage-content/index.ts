import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

// Helper function to parse CSV text
function parseCsv(text) {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const header = lines.shift().trim().split(',');
  return { lines, header };
}

// Helper function to process a batch of records for a specific table
async function processBatch(adminClient, tableName, records) {
  const successful = [];
  const failed = [];

  for (const record of records) {
    const { error } = await adminClient.from(tableName).insert(record);
    if (error) {
      failed.push({ record, error: error.message });
    } else {
      successful.push(record);
    }
  }
  return { successful, failed };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // --- Security Check: Ensure user is an admin ---
    const userSupabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );
    const { data: { user }, error: userError } = await userSupabaseClient.auth.getUser();
    if (userError) throw userError;

    const { data: profile, error: profileError } = await userSupabaseClient
      .from('profiles').select('is_admin').eq('id', user.id).single();
    if (profileError || !profile?.is_admin) {
      throw new Error('Access denied: User is not an admin.');
    }

    // --- Admin Client for performing actions ---
    const adminSupabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('CUSTOM_SERVICE_ROLE_KEY') ?? ''
    );

    const { action, payload } = await req.json();
    let recordsToCreate = [];
    let tableName = '';

    // --- Logic for CSV and Google Sheet processing ---
    if (action === 'bulk_import_announcements_csv' || action === 'bulk_import_events_csv') {
      tableName = action.includes('announcements') ? 'announcements' : 'events';
      const { lines, header } = parseCsv(payload.csvText);
      // Basic validation can be improved here
      recordsToCreate = lines.map(line => {
        const values = line.trim().split(',');
        const record = {};
        header.forEach((h, i) => record[h] = values[i]);
        return record;
      });
    } else if (action === 'bulk_import_announcements_sheet' || action === 'bulk_import_events_sheet') {
      tableName = action.includes('announcements') ? 'announcements' : 'events';
      const response = await fetch(payload.sheetUrl);
      if (!response.ok) throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`);
      const csvText = await response.text();
      const { lines, header } = parseCsv(csvText);
      recordsToCreate = lines.map(line => {
        const values = line.trim().split(',');
        const record = {};
        header.forEach((h, i) => record[h] = values[i]);
        return record;
      });
    } else {
      throw new Error('Invalid action specified.');
    }

    // --- Process the batch and return results ---
    const { successful, failed } = await processBatch(adminSupabaseClient, tableName, recordsToCreate);

    return new Response(JSON.stringify({ successful, failed }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});

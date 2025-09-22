import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

// Define a type for our user data for better type safety
interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  grade: number | null;
  is_admin: boolean;
  created_at: string;
  email_confirmed_at: string | null;
}

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Auth context of the logged-in user.
    const userSupabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    // Now, get the user from the userSupabaseClient.
    const { data: { user }, error: userError } = await userSupabaseClient.auth.getUser();
    if (userError) throw userError;

    // Check if the user is an admin by querying the 'profiles' table.
    const { data: profile, error: profileError } = await userSupabaseClient
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single();
    if (profileError || !profile?.is_admin) {
      throw new Error('Access denied: User is not an admin.');
    }

    // Create a Supabase client with the Service Role Key for admin actions.
    const adminSupabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('CUSTOM_SERVICE_ROLE_KEY') ?? ''
    );

    const { action, userId, is_admin } = await req.json();

    // --- Handle different admin actions ---
    switch (action) {
      case 'list': {
        const { data: users, error } = await adminSupabaseClient.auth.admin.listUsers();
        if (error) throw error;

        const { data: profiles, error: profilesError } = await adminSupabaseClient
          .from('profiles')
          .select('*');
        if (profilesError) throw profilesError;

        // Combine auth user data with profile data
        const combinedUsers = users.users.map(u => {
          const p = profiles.find(p => p.id === u.id) || {};
          return {
            id: u.id,
            email: u.email,
            email_confirmed_at: u.email_confirmed_at,
            created_at: u.created_at,
            full_name: p.full_name,
            grade: p.grade,
            is_admin: p.is_admin,
          };
        });

        return new Response(JSON.stringify({ users: combinedUsers }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        });
      }

      case 'confirm_email': {
        const { data, error } = await adminSupabaseClient.auth.admin.updateUserById(
          userId,
          { email_confirm: true }
        );
        if (error) throw error;
        return new Response(JSON.stringify({ success: true, user: data }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        });
      }

      case 'grant_admin':
      case 'revoke_admin': {
        const { data, error } = await adminSupabaseClient
          .from('profiles')
          .update({ is_admin: action === 'grant_admin' })
          .eq('id', userId);
        if (error) throw error;
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        });
      }
      
      case 'delete_user': {
        const { error } = await adminSupabaseClient.auth.admin.deleteUser(userId);
        if (error) throw error;
        // The profile will be deleted automatically by a trigger in the database.
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Invalid action' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 401, // Unauthorized or other error
    });
  }
});

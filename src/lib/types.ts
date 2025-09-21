// src/lib/types.ts

// This file defines the shape of our data structures.
// Using TypeScript helps prevent bugs by ensuring our data is consistent.

export interface Event {
  id: number;
  created_at: string;
  event_type: 'Practice' | 'Race';
  title: string;
  event_date: string; // Stored as a timestamp string
  description: string | null;
}

export interface Profile {
  id: string; // UUID
  full_name: string | null;
  grade: number | null;
  is_admin: boolean;
}

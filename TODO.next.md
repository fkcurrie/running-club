# TODO List: Next Features

This document outlines the next phase of development for the running club website, focusing on enhancing the admin experience and adding value for members.

---

## Phase 1: Admin & Content Management

- [ ] **Member Management:**
    - [ ] Create a new admin page to list all registered members.
    - [ ] Add functionality for admins to edit member details (e.g., name, grade).
    - [ ] Add functionality for admins to delete members.
    - [ ] Add functionality for admins to manually confirm a member's email.

- [ ] **Event Management (Enhancements):**
    - [ ] Create an "Edit Event" page.
    - [ ] Link the edit button on the admin dashboard to the new page.
    - [ ] Implement the logic to pre-fill the form with existing event data.
    - [ ] Implement the logic to update an event in the database.
    - [ ] Verify that the "Delete Event" functionality is working correctly on the main admin page.

- [ ] **Content Snippets:**
    - [ ] Create a new table in Supabase called `content_snippets` (`id`, `name`, `content`).
    - [ ] Create a UI in the admin dashboard to edit the content of these snippets.
    - [ ] Display the snippets on the public-facing pages (e.g., a welcome message on the home page).

---

## Phase 2: Member-Facing Features

- [ ] **User Profiles:**
    - [ ] Create a new `profile.astro` page.
    - [ ] Add a link to the profile page in the main navigation for logged-in users.
    - [ ] Create a form allowing users to update their `full_name` and `grade`.
    - [ ] Implement the Supabase logic to handle profile updates.

- [ ] **Password Reset:**
    - [ ] Create a `forgot-password.astro` page with a form to request a reset link.
    - [ ] Implement the `supabase.auth.resetPasswordForEmail()` function.
    - [ ] Create a `reset-password.astro` page to handle the password update from the email link.
    - [ ] Implement the `supabase.auth.updateUser()` function for changing the password.

- [ ] **Announcements Page:**
    - [ ] Create a new table in Supabase called `announcements` (`id`, `title`, `content`, `created_at`).
    - [ ] Create a new page `announcements.astro` visible to logged-in members.
    - [ ] Display a list of announcements, newest first.
    - [ ] Enhance the admin dashboard to allow admins to create, edit, and delete announcements.

---

## Phase 3: "Nice-to-Have" Features

- [ ] **Photo Gallery:**
    - [ ] Set up a new storage bucket in Supabase for gallery images.
    - [ ] Create an admin UI for uploading and managing photos.
    - [ ] Create a new `gallery.astro` page, protected for members, to display the photos.

- [ ] **RSVP System:**
    - [ ] Create a new table `rsvps` (`id`, `event_id`, `user_id`, `status`).
    - [ ] On the `schedule.astro` page, add buttons for each event to allow users to RSVP.
    - [ ] In the admin dashboard, display a list of RSVPs for each event.

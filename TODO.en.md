# TODO List

This document tracks the steps needed to build and launch the running club website with the new technical architecture.

---

## Phase 1: Service & Environment Setup

*   [ ] **Create Accounts:**
    *   [ ] Create an account on [GitHub](https://github.com).
    *   [ ] Create an account on [Render.com](https://render.com/) using the GitHub account.
    *   [ ] Create an account on [Supabase](https://supabase.com/) using the GitHub account.
*   [ ] **Configure Supabase:**
    *   [ ] Create a new Supabase project.
    *   [ ] In the "Table Editor", create a `members` table with the necessary columns (e.g., `id`, `created_at`, `full_name`, `grade`).
    *   [ ] Enable email validation in the authentication settings.
    *   [ ] Save the project's API keys (Project URL and `anon` public key) for later.
*   [ ] **Initialize Project Locally:**
    *   [ ] Install Node.js on the development computer.
    *   [ ] Create a new Astro project with the command: `npm create astro@latest`.
    *   [ ] Initialize a Git repository: `git init`.
*   [ ] **Set up GitHub Repository:**
    *   [ ] Create a new repository on GitHub.
    *   [ ] Link the local project to the GitHub repository and push the initial code.

---

## Phase 2: Site Development

*   [ ] **Site Structure:**
    *   [ ] Create the basic page structure in Astro (`src/pages/`): home (`index.astro`), signup (`signup.astro`), login (`login.astro`), and a schedule page (`schedule.astro`).
*   [ ] **Supabase Integration:**
    *   [ ] Install the Supabase JS client: `npm install @supabase/supabase-js`.
    *   [ ] Create a configuration file to initialize the Supabase client with the API keys.
*   [ ] **Signup Functionality:**
    *   [ ] Create an HTML form on the `signup.astro` page.
    *   [ ] Add a client-side script to call the `supabase.auth.signUp()` function with the form data.
    *   [ ] Display a success message asking the user to check their email.
*   [ ] **Login Functionality:**
    *   [ ] Create an HTML form on the `login.astro` page.
    *   [ ] Add a client-side script to call the `supabase.auth.signInWithPassword()`.
    *   [ ] Redirect the user to the schedule page after a successful login.
*   [ ] **Protect the Schedule Page:**
    *   [ ] Add a script to the `schedule.astro` page that checks if the user is logged in.
    *   [ ] If the user is not logged in, redirect them to the login page.
*   [ ] **Site Content:**
    *   [ ] Fill the home page with welcome text.
    *   [ ] Add the calendar content to the `schedule.astro` page.

---

## Phase 3: Deployment

*   [ ] **Connect Render to GitHub:**
    *   [ ] In Render, create a new "Static Site".
    *   [ ] Select the project's GitHub repository.
*   [ ] **Configure Deployment on Render:**
    *   [ ] **Build Command:** `npm run build`
    *   [ ] **Publish Directory:** `dist`
*   [ ] **Configure Environment Variables:**
    *   [ ] In the Render service settings, add the Supabase API keys as environment variables to keep them secure.
    *   [ ] Update the Astro code to use these variables.
*   [ ] **Deploy and Test:**
    *   [ ] Trigger the first deployment.
    *   [ ] Test the live site: signup, email validation, login, and access to the protected page.

---

## Phase 4: Maintenance Documentation

*   [ ] **Write an Administrator's Guide:** Create a document explaining:
    *   How to update site content by editing Astro files and pushing changes to GitHub.
    *   How to view and manage the member list in the Supabase dashboard.
    *   Provide the credentials for the GitHub, Render, and Supabase accounts.

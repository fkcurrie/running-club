# Administrator's Guide

Welcome to the guide for managing the School Running Club website. This document explains how to perform the most common tasks, like updating the event schedule and managing members.

---

## 1. Overview of the System

The website is built using three free services that work together. You will need the login information for each.

*   **GitHub ([github.com/fkcurrie/running-club](https://github.com/fkcurrie/running-club))**
    *   **What it is:** Stores the website's source code.
    *   **Why we use it:** Any changes pushed here automatically trigger an update of the live website. You will likely never need to touch this.

*   **Render ([render.com](https://render.com/))**
    *   **What it is:** The hosting provider that makes the website live on the internet.
    *   **Why we use it:** It's free and automatically deploys changes from GitHub. If the site is ever down, this is the first place to check.

*   **Supabase ([supabase.com](https://supabase.com/))**
    *   **What it is:** The backend database. It securely stores the list of members and the event schedule.
    *   **Why we use it:** It provides a user-friendly dashboard for managing data and handles all user signups and logins securely.

---

## 2. Core Task: Managing the Event Schedule

This is the task you will perform most often.

### Step 1: Log In to the Website
*   Go to the website homepage: **[https://running-club.onrender.com/](https://running-club.onrender.com/)**
*   Log in with the designated administrator account.

### Step 2: Access the Admin Dashboard
*   Once you are logged in, you will be on the "Club Schedule" page.
*   In the top navigation bar, click the **"Admin Dashboard"** link.

### Step 3: Manage Events
You are now on the "Manage Events" page.

*   **To Add a New Event:**
    1.  Fill out the form under "Add New Event".
    2.  Select the type (Practice or Race), title, and date/time.
    3.  Add a description if needed.
    4.  Click **"Add Event"**. The page will reload, and you will see the new event in the "Existing Events" table.

*   **To Edit an Existing Event:**
    1.  Find the event in the "Existing Events" table.
    2.  Click the **Edit icon (✏️)** next to it.
    3.  You will be taken to a new page where you can change the event details.
    4.  Click **"Update Event"**. You will be returned to the dashboard.

*   **To Delete an Existing Event:**
    1.  Find the event in the "Existing Events" table.
    2.  Click the **Delete icon (🗑️)** next to it.
    3.  A confirmation box will appear. Click "OK". The event will be removed from the list.

Any changes you make here are **live immediately** on the public "Club Schedule" page for all members.

---

## 3. Managing Club Members

### Step 1: Log In to Supabase
*   Go to **[https://app.supabase.com/](https://app.supabase.com/)** and log in.
*   Select the `test-run-club` project.

### Step 2: View Members
*   In the left menu, click the **Table Editor** icon (looks like a grid).
*   Click on the table named **`profiles`**.
*   You will see a list of all registered members with their name and grade.

### Step 3: How to Make Another User an Administrator
You can grant admin rights to another registered user.
1.  In the `profiles` table, find the user you want to make an admin.
2.  In their row, find the column named `is_admin`.
3.  Double-click the `false` value and change it to `true`.
4.  Save the change (click outside the cell).

That user will now see the "Admin Dashboard" link when they log in and will be able to manage events.
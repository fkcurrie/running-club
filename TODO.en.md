# TODO List

This document tracks the development of the running club website. The initial launch is complete, and the site is now in a stable state.

---

## Initial Launch (v0.1.0) - COMPLETED

*   [x] **Service & Environment Setup:** Configured Supabase, Render, and GitHub.
*   [x] **Site Development:** Built the core site structure with Astro, including user signup, login, password reset, and protected pages for the schedule and announcements.
*   [x] **Deployment:** Deployed the site to Render.com.
*   [x] **Maintenance Documentation:** Created an `ADMIN_GUIDE.md`.

---

## Future Enhancements

This section lists potential new features and improvements for future versions of the site.

### User Experience & UI

*   [ ] **Profile Pictures:** Allow users to upload a photo or select an avatar for their profile.
*   [ ] **UI Modernization:**
    *   [ ] Implement a more modern and engaging design system.
    *   [ ] Add a dark mode option.
    *   [ ] Replace system `alert()` messages with non-blocking "toast" notifications.
*   [ ] **Visual Calendar:** Enhance the schedule page with a full-featured calendar view, allowing users to see events for the month at a glance.
*   [ ] **Member Directory:** Create a page where members can see a list of other club members (respecting privacy settings).

### Features

*   [ ] **Event Details Page:** Allow users to click on an event to see more details, such as a map, a list of attendees, and a space for comments.
*   [ ] **Photo Gallery:** Create a section where coaches or admins can upload photos from practices and races.
*   [ ] **Personal Bests:** Add a feature to the user profile where members can track their personal records for different race distances.
*   [ ] **Coach's Corner:** A dedicated page for information about the coaches, including bios and contact information.
*   [ ] **Integrated Feedback Form:** Create a feedback page where users can submit bug reports and feature requests. The form will automatically create an issue in the GitHub repository and provide the user with a reference number.

### Admin & Backend

*   [ ] **Rich Content for Announcements:** Allow admins to use Markdown or a rich text editor to format announcements with images, links, and lists.
*   [ ] **Improved Admin Tables:** Enhance the admin tables with features like sorting, filtering, and searching to make member management easier.
*   [ ] **Email Notifications:** Set up automated email reminders for upcoming events that members have RSVP'd to.

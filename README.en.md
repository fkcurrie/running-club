# Michelle O'Bonsawin Running Club

## 1. About the Project

This project is the official website for the Michelle O'Bonsawin school running club. The goal is to provide a central, secure, and easy-to-manage hub for student members, coaches, and parents.

---

## 2. Technology Choices

To meet the requirements for free hosting, security, and long-term maintainability, this project uses a modern web stack:

*   **Hosting:** [Render.com](https://render.com/)
    *   **Reason:** Provides an excellent free tier for hosting static sites. Deployment is automated from a GitHub repository, simplifying the update process.

*   **Frontend Framework:** [Astro](https://astro.build/)
    *   **Reason:** A static site generator that produces very fast websites. It allows building the site with reusable components and managing content through simple files (like Markdown), making updates easier for non-technical users.

*   **Backend & Database:** [Supabase](https://supabase.com/)
    *   **Reason:** A Backend-as-a-Service platform that provides a secure PostgreSQL database and a complete authentication system. Supabase will handle user signup, email validation, and logins, ensuring student data is stored safely. The future administrator can view the member list through a user-friendly dashboard.

---

## 3. Features

*   **Online Signup:** Students can create an account. A confirmation email will be sent to their school email address for validation.
*   **Secure Login:** Members can log in to access private club content.
*   **Events Calendar:** A protected page, visible only to logged-in members, will display the training and race schedule.
*   **Member Management:** Administrators can view the list of registered members in the Supabase dashboard.

---

## 4. Security and Privacy

Security is handled by Supabase, a trusted provider:

1.  **Authentication:** The signup and login process is fully managed by Supabase Auth, which includes email validation and secure password handling.
2.  **Data Storage:** Student information is stored in a secure PostgreSQL database, hosted by Supabase.
3.  **Access Control:** Sensitive content (like the full calendar) will only be accessible to authenticated users.

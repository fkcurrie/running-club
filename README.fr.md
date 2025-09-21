# Club de Course Michelle O'Bonsawin

## 1. À propos du projet

Ce projet est le site web officiel du club de course de l'école Michelle O'Bonsawin. L'objectif est de fournir une plateforme centrale, sécurisée et facile à gérer pour les étudiants membres, les entraîneurs et les parents.

---

## 2. Choix Technologiques

Pour répondre aux exigences de gratuité, de sécurité et de maintenabilité à long terme, ce projet utilise une architecture web moderne :

*   **Hébergement :** [Render.com](https://render.com/)
    *   **Raison :** Offre un excellent service gratuit pour l'hébergement de sites statiques. Le déploiement est automatisé à partir d'un dépôt GitHub, ce qui simplifie la mise à jour.

*   **Framework Frontend :** [Astro](https://astro.build/)
    *   **Raison :** Un générateur de sites statiques qui produit des sites web très rapides. Il permet de construire le site avec des composants réutilisables et de gérer le contenu via des fichiers simples (Markdown), ce qui facilite les mises à jour pour les non-techniciens.

*   **Backend et Base de Données :** [Supabase](https://supabase.com/)
    *   **Raison :** Une plateforme "Backend-as-a-Service" qui fournit une base de données PostgreSQL sécurisée et un système d'authentification complet. Supabase gérera l'inscription des utilisateurs, la validation par e-mail et la connexion, garantissant que les données des étudiants sont stockées en toute sécurité. L'administrateur futur pourra consulter la liste des membres via un tableau de bord convivial.

---

## 3. Fonctionnalités

*   **Inscription en Ligne :** Les étudiants peuvent créer un compte. Un e-mail de confirmation sera envoyé à leur adresse e-mail scolaire pour validation.
*   **Connexion Sécurisée :** Les membres peuvent se connecter pour accéder au contenu privé du club.
*   **Calendrier des Événements :** Une page protégée, visible uniquement par les membres connectés, affichera le calendrier des entraînements et des courses.
*   **Gestion des Membres :** Les administrateurs peuvent voir la liste des membres inscrits dans le tableau de bord Supabase.

---

## 4. Sécurité et Confidentialité

La sécurité est gérée par Supabase, un fournisseur de confiance :

1.  **Authentification :** Le processus d'inscription et de connexion est entièrement géré par Supabase Auth, qui inclut la validation par e-mail et la gestion sécurisée des mots de passe.
2.  **Stockage des Données :** Les informations des étudiants sont stockées dans une base de données PostgreSQL sécurisée, hébergée par Supabase.
3.  **Contrôle d'Accès :** Le contenu sensible (comme le calendrier complet) ne sera accessible qu'aux utilisateurs authentifiés.

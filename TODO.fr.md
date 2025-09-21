# Liste de Tâches

Ce document suit les étapes nécessaires pour construire et lancer le site web du club de course avec la nouvelle architecture technique.

---

## Phase 1 : Configuration des Services et de l'Environnement

*   [ ] **Créer les Comptes :**
    *   [ ] Créer un compte sur [GitHub](https://github.com).
    *   [ ] Créer un compte sur [Render.com](https://render.com/) en utilisant le compte GitHub.
    *   [ ] Créer un compte sur [Supabase](https://supabase.com/) en utilisant le compte GitHub.
*   [ ] **Configurer Supabase :**
    *   [ ] Créer un nouveau projet Supabase.
    *   [ ] Dans le "Table Editor", créer une table `members` avec les colonnes nécessaires (ex: `id`, `created_at`, `full_name`, `grade`).
    *   [ ] Activer la validation par e-mail dans les paramètres d'authentification.
    *   [ ] Conserver les clés API du projet (Project URL et `anon` public key) pour plus tard.
*   [ ] **Initialiser le Projet Localement :**
    *   [ ] Installer Node.js sur l'ordinateur de développement.
    *   [ ] Créer un nouveau projet Astro avec la commande : `npm create astro@latest`.
    *   [ ] Initialiser un dépôt Git : `git init`.
*   [ ] **Configurer le Dépôt GitHub :**
    *   [ ] Créer un nouveau dépôt sur GitHub.
    *   [ ] Lier le projet local au dépôt GitHub et pousser le code initial.

---

## Phase 2 : Développement du Site

*   [ ] **Structure du Site :**
    *   [ ] Créer la structure de base des pages dans Astro (`src/pages/`): accueil (`index.astro`), inscription (`signup.astro`), connexion (`login.astro`), et une page pour le calendrier (`schedule.astro`).
*   [ ] **Intégration de Supabase :**
    *   [ ] Installer le client Supabase JS : `npm install @supabase/supabase-js`.
    *   [ ] Créer un fichier de configuration pour initialiser le client Supabase avec les clés API.
*   [ ] **Fonctionnalité d'Inscription :**
    *   [ ] Créer un formulaire HTML sur la page `signup.astro`.
    *   [ ] Ajouter un script côté client pour appeler la fonction `supabase.auth.signUp()` avec les données du formulaire.
    *   [ ] Afficher un message de succès demandant à l'utilisateur de vérifier ses e-mails.
*   [ ] **Fonctionnalité de Connexion :**
    *   [ ] Créer un formulaire HTML sur la page `login.astro`.
    *   [ ] Ajouter un script côté client pour appeler la fonction `supabase.auth.signInWithPassword()`.
    *   [ ] Rediriger l'utilisateur vers la page du calendrier après une connexion réussie.
*   [ ] **Protéger la Page Calendrier :**
    *   [ ] Ajouter un script sur la page `schedule.astro` qui vérifie si l'utilisateur est connecté.
    *   [ ] Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion.
*   [ ] **Contenu du Site :**
    *   [ ] Remplir la page d'accueil avec un texte de bienvenue.
    *   [ ] Ajouter le contenu du calendrier sur la page `schedule.astro`.

---

## Phase 3 : Déploiement

*   [ ] **Connecter Render à GitHub :**
    *   [ ] Sur Render, créer un nouveau "Static Site".
    *   [ ] Sélectionner le dépôt GitHub du projet.
*   [ ] **Configurer le Déploiement sur Render :**
    *   [ ] **Build Command:** `npm run build`
    *   [ ] **Publish Directory:** `dist`
*   [ ] **Configurer les Variables d'Environnement :**
    *   [ ] Dans les paramètres du service Render, ajouter les clés API de Supabase comme variables d'environnement pour les garder sécurisées.
    *   [ ] Mettre à jour le code Astro pour utiliser ces variables.
*   [ ] **Déployer et Tester :**
    *   [ ] Lancer le premier déploiement.
    *   [ ] Tester le site en ligne : inscription, validation par e-mail, connexion et accès à la page protégée.

---

## Phase 4 : Documentation pour la Maintenance

*   [ ] **Rédiger un Guide de l'Administrateur :** Créer un document expliquant :
    *   Comment mettre à jour le contenu du site en modifiant les fichiers Astro et en poussant les changements sur GitHub.
    *   Comment voir et gérer la liste des membres dans le tableau de bord Supabase.
    *   Fournir les identifiants pour les comptes GitHub, Render et Supabase.

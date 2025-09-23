# Club de Course de l'École

## 1. À propos du projet

Ce projet est le site web officiel du club de course de l'école. L'objectif est de fournir une plateforme centrale, sécurisée et facile à gérer pour les élèves membres, les entraîneurs et les parents.

---

## 2. Choix Technologiques

Pour répondre aux exigences d'hébergement gratuit, de sécurité et de maintenabilité à long terme, ce projet utilise une pile technologique moderne :

*   **Hébergement :** [Render.com](https://render.com/)
    *   **Raison :** Offre un excellent plan gratuit pour l'hébergement de sites statiques. Le déploiement est automatisé depuis un dépôt GitHub, ce qui simplifie le processus de mise à jour.

*   **Framework Frontend :** [Astro](https://astro.build/)
    *   **Raison :** Un générateur de sites statiques qui produit des sites web très rapides. Il permet de construire le site avec des composants réutilisables et de gérer le contenu via des fichiers simples (comme le Markdown), facilitant les mises à jour pour les utilisateurs non techniques.

*   **Backend & Base de Données :** [Supabase](https://supabase.com/)
    *   **Raison :** Une plateforme Backend-as-a-Service qui fournit une base de données PostgreSQL sécurisée et un système d'authentification complet. Supabase gérera l'inscription des utilisateurs, la validation par courriel et les connexions, garantissant que les données des élèves sont stockées en toute sécurité. Le futur administraterateur pourra consulter la liste des membres via un tableau de bord convivial.

---

## 3. Fonctionnalités

*   **Inscription en Ligne :** Les élèves peuvent créer un compte. Un courriel de confirmation sera envoyé à leur adresse scolaire pour validation.
*   **Connexion Sécurisée :** Les membres peuvent se connecter pour accéder au contenu privé du club.
*   **Calendrier des Événements :** Une page protégée, visible uniquement par les membres connectés, affichera le calendrier des entraînements et des courses.
*   **Gestion des Membres :** Les administrateurs peuvent consulter la liste des membres inscrits dans le tableau de bord Supabase.

---

## 4. Sécurité et Confidentialité

La sécurité est gérée par Supabase, un fournisseur de confiance :

1.  **Authentification :** Le processus d'inscription et de connexion est entièrement géré par Supabase Auth, qui inclut la validation par courriel et la gestion sécurisée des mots de passe.
2.  **Stockage des Données :** Les informations des élèves sont stockées dans une base de données PostgreSQL sécurisée, hébergée par Supabase.
3.  **Contrôle d'Accès :** Le contenu sensible (comme le calendrier complet) ne sera accessible qu'aux utilisateurs authentifiés.

---

## 5. Configuration du Développement Local

Pour exécuter ce projet sur votre machine locale, suivez ces étapes.

### Prérequis

*   [Node.js](https://nodejs.org/) (v22.17.0 ou supérieure)
*   [npm](https://www.npmjs.com/) (fourni avec Node.js)

### Étapes

1.  **Clonez le Dépôt :**
    ```bash
    git clone https://github.com/fkcurrie/running-club.git
    ```

2.  **Naviguez vers le Répertoire du Projet :**
    ```bash
    cd running-club-site
    ```

3.  **Installez les Dépendances :**
    ```bash
    npm install
    ```

4.  **Configurez les Variables d'Environnement :**
    *   Créez un nouveau fichier nommé `.env` à la racine du répertoire `running-club-site`.
    *   Vous devrez obtenir l'URL de votre projet et votre clé anonyme depuis le tableau de bord de votre projet Supabase, sous `Project Settings > API`.
    *   Ajoutez le contenu suivant au fichier `.env`, en remplaçant les valeurs d'exemple :
        ```
        # Supabase Credentials
        PUBLIC_SUPABASE_URL=[VOTRE_URL_SUPABASE]
        PUBLIC_SUPABASE_ANON_KEY=[VOTRE_CLE_ANON_SUPABASE]
        ```

5.  **Lancez le Serveur de Développement :**
    *   Ce projet nécessite l'option `--host` pour être accessible sur votre réseau local.
    *   Exécutez la commande suivante :
        ```bash
        npm run dev -- --host
        ```

6.  **Accédez au Site :**
    *   Le serveur est maintenant en cours d'exécution. Vous pouvez y accéder dans votre navigateur à l'adresse `http://<votre-adresse-ip-locale>:4173`.

# Guide de l'Administrateur

Bienvenue dans le guide de gestion du site web du Club de Course de l'École. Ce document explique comment effectuer les tâches les plus courantes, comme la mise à jour du calendrier des événements et la gestion des membres.

---

## 1. Aperçu du Système

Le site web est construit à l'aide de trois services gratuits qui fonctionnent ensemble. Vous aurez besoin des informations de connexion pour chacun.

*   **GitHub ([github.com/fkcurrie/running-club](https://github.com/fkcurrie/running-club))**
    *   **Qu'est-ce que c'est :** Stocke le code source du site web.
    *   **Pourquoi nous l'utilisons :** Toute modification ici déclenche automatiquement une mise à jour du site en direct. Vous n'aurez probablement jamais besoin d'y toucher.

*   **Render ([render.com](https://render.com/))**
    *   **Qu'est-ce que c'est :** L'hébergeur qui met le site web en ligne sur Internet.
    *   **Pourquoi nous l'utilisons :** C'est gratuit et déploie automatiquement les changements depuis GitHub. Si le site est en panne, c'est le premier endroit à vérifier.

*   **Supabase ([supabase.com](https://supabase.com/))**
    *   **Qu'est-ce que c'est :** La base de données principale. Elle stocke de manière sécurisée la liste des membres et le calendrier des événements.
    *   **Pourquoi nous l'utilisons :** Elle offre un tableau de bord convivial pour gérer les données et s'occupe de manière sécurisée de l'inscription et de la connexion des utilisateurs.

---

## 2. Tâche Principale : Gérer le Calendrier des Événements

C'est la tâche que vous effectuerez le plus souvent.

### Étape 1 : Se Connecter au Site Web
*   Allez sur la page d'accueil du site : **[https://running-club.onrender.com/](https://running-club.onrender.com/)**
*   Connectez-vous avec le compte administrateur désigné.

### Étape 2 : Accéder au Tableau de Bord d'Administration
*   Une fois connecté, vous serez sur la page "Club Schedule".
*   Dans la barre de navigation supérieure, cliquez sur le lien **"Admin Dashboard"**.

### Étape 3 : Gérer les Événements
Vous êtes maintenant sur la page "Manage Events".

*   **Pour Ajouter un Nouvel Événement :**
    1.  Remplissez le formulaire sous "Add New Event".
    2.  Sélectionnez le type (Entraînement ou Course), le titre et la date/heure.
    3.  Ajoutez une description si nécessaire.
    4.  Cliquez sur **"Add Event"**. La page se rechargera et vous verrez le nouvel événement dans le tableau "Existing Events".

*   **Pour Modifier un Événement Existant :**
    1.  Trouvez l'événement dans le tableau "Existing Events".
    2.  Cliquez sur l'icône **Modifier (✏️)** à côté.
    3.  Vous serez redirigé vers une nouvelle page où vous pourrez modifier les détails.
    4.  Cliquez sur **"Update Event"**. Vous retournerez au tableau de bord.

*   **Pour Supprimer un Événement Existant :**
    1.  Trouvez l'événement dans le tableau "Existing Events".
    2.  Cliquez sur l'icône **Supprimer (🗑️)** à côté.
    3.  Une boîte de confirmation apparaîtra. Cliquez sur "OK". L'événement sera retiré de la liste.

Toutes les modifications que vous effectuez ici sont **immédiatement visibles** sur la page publique "Club Schedule" pour tous les membres.

---

## 3. Gérer les Membres du Club

### Étape 1 : Se Connecter à Supabase
*   Allez sur **[https://app.supabase.com/](https://app.supabase.com/)** et connectez-vous.
*   Sélectionnez le projet `test-run-club`.

### Étape 2 : Voir les Membres
*   Dans le menu de gauche, cliquez sur l'icône **Table Editor** (ressemble à une grille).
*   Cliquez sur la table nommée **`profiles`**.
*   Vous verrez une liste de tous les membres inscrits avec leur nom et leur niveau scolaire.

### Étape 3 : Comment Rendre un Autre Utilisateur Administrateur
Vous pouvez accorder des droits d'administrateur à un autre utilisateur enregistré.
1.  Dans la table `profiles`, trouvez l'utilisateur que vous souhaitez rendre administrateur.
2.  Dans sa ligne, trouvez la colonne nommée `is_admin`.
3.  Double-cliquez sur la valeur `false` et changez-la en `true`.
4.  Enregistrez la modification (cliquez en dehors de la cellule).

Cet utilisateur verra désormais le lien "Admin Dashboard" lorsqu'il se connectera et pourra gérer les événements.
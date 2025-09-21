# Journal des Modifications

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), et ce projet adhère à la [Gestion Sémantique de Version](https://semver.org/spec/v2.0.0.html).

---

## [0.2.0] - 2025-09-21

### Modifié

*   **Changement Complet de l'Architecture Technique :**
    *   Remplacement de la solution Google Workspace par une architecture web moderne.
    *   **Hébergement :** Passage de Google Sites à **Render.com**.
    *   **Frontend :** Adoption du générateur de sites statiques **Astro**.
    *   **Backend & Base de Données :** Remplacement de Google Forms/Sheets par **Supabase** pour l'authentification et la gestion des données.
*   Mise à jour du `README.md` pour refléter la nouvelle pile technologique.
*   Mise à jour du `TODO.md` avec un plan de développement détaillé pour la nouvelle architecture, incluant la configuration des services, le développement local et le déploiement.

## [0.1.0] - 2025-09-21

### Ajouté

*   **Initialisation du Projet :**
    *   Création du fichier `README.md` avec la définition du projet, les choix technologiques (Google Workspace), et la stratégie de sécurité.
    *   Création du fichier `TODO.md` avec le plan de développement détaillé en quatre phases.
    *   Création de ce fichier `CHANGELOG.md` pour suivre l'historique du projet.

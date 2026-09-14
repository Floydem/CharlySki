# CharlySki 🎿🏔️

Application web mobile / PWA personnelle pour Charlie, pensée comme un copilote montagne transfrontalier.

## CharlySki 1.0

- catalogue d’environ 46 stations : Doubs, Jura français, Haute-Savoie, Savoie et Valais
- météo réelle via Open-Meteo, sans clé API
- CharlyScore sur 10 avec explication « Pourquoi ce choix ? »
- Powder Alert pour repérer les chutes de neige prévues
- position de l’utilisateur, distance estimée et calcul routier à la demande
- fiches station : domaine, km, pistes, noires, remontées, altitude, snowpark, site officiel et webcams
- carte interactive OpenStreetMap / Leaflet
- CharlyDex : stations visitées, progression par région et trophées
- profils personnels de station : note, parking, meilleure piste, resto, notes et « à refaire »
- tracker GPS local : vitesse actuelle / moyenne / max, distance, altitude, D+, D-, durée et descentes estimées
- tracé de sortie sur carte et export GPX
- historique de saison et records
- checklist ski
- export / import de sauvegarde JSON
- PWA installable avec icône CharlySki et cache de l’interface

## Installation sur téléphone

Le site est hébergé via GitHub Pages. Aucun compte n’est nécessaire pour le consulter.

### iPhone / iPad
Ouvrir CharlySki dans Safari, puis **Partager > Sur l’écran d’accueil**.

### Android
Ouvrir CharlySki dans Chrome, puis utiliser **Installer l’application** ou **Ajouter à l’écran d’accueil** selon le navigateur.

## Données et confidentialité

Les favoris, profils, collection et sorties GPS restent dans le stockage local du navigateur. Les traces GPS ne sont pas envoyées sur un serveur. Utiliser l’export de sauvegarde avant de changer de téléphone ou d’effacer les données du navigateur.

## Limites connues

- Une PWA peut être suspendue par iOS / Android quand l’écran est verrouillé : pour une trace GPS continue, garder CharlySki actif pendant la sortie.
- Le nombre de pistes, remontées et kilomètres est un repère de domaine et peut évoluer.
- Il n’existe pas d’API gratuite homogène fiable couvrant l’ouverture en temps réel de toutes les stations du catalogue : les fiches renvoient vers les informations live officielles.
- Le CharlyScore est un indicateur d’aide au choix, pas une garantie de sécurité ni d’ouverture du domaine.

## Hébergement

Le projet reste volontairement statique et fonctionne sur GitHub Pages. Vercel n’est pas nécessaire à ce stade ; il pourra devenir utile plus tard si CharlySki ajoute un backend, des comptes ou des fonctions serveur.
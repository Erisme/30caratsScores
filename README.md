# 30caratsScores

Mini application web (100% front) pour compter les points de fin de partie de **30 Carats**.

## Utilisation

1. Ouvrir `/home/runner/work/30caratsScores/30caratsScores/index.html` dans un navigateur.
2. Choisir le nombre de joueurs (3 à 6) puis cliquer sur **Créer la feuille de score**.
3. Renseigner pour chaque couleur sa valeur révélée en fin de partie.
4. Renseigner pour chaque joueur les pierres possédées et les pépites d'or.
5. Le classement et les scores sont calculés automatiquement.

## Règle de calcul implémentée

- Chaque pierre d'une couleur vaut la **valeur révélée** de cette couleur.
- Chaque pépite d'or vaut **10 points**.
- Score d'un joueur = somme des pierres par couleur + (pépites × 10).

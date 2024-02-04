# users-fo

Ce projet permet de gérer l'interface utilisateur pour l'application de gestion des utilisateurs.

## Technologies et librairies utilisées

1. Angular 
2. Bootstrap

## Téléchargement des sources

Pour télécharger le code source de l'application, lancer la commande ci-dessous:
```bash
git clone https://github.com/bbenaouicha/users-fo.git
```

## Lancement de l'application en local

Vous pouvez lancer l'application de deux manières différentes :
1. En utilisant votre terminal.
2. En utilisant Docker et docker-compose.


### Méthode 1 : Lancement à travers le terminal

#### Prérequis

Avant de lancer l'application, assurez-vous d'avoir les éléments suivants installés sur votre système :

- Node v18.0.0.
- Angular 13
- Port 4200 de votre machine est disponible.

#### Procédure

1. Naviguer jusqu'au répertoire principal du projet.
2. Lancer la commande ci-dessous :

```bash
npm i
```

3. Pour lancer les tests, exécuter la commande ci-dessous

```bash
npm run test
```

4. Pour démarrer l'application, lancer la commande ci-dessous :

```bash
ng s --o
```

Une fois que l'application est lancée avec succès, ouvrez votre navigateur web et accédez à l'URL suivante: `http://localhost:4200`


### Méthode 2 : Utilisation de Docker et docker-compose

#### Prérequis

Avant de lancer l'application, assurez-vous d'avoir les éléments suivants installés sur votre système :
- Docker & docker-compose.
- Port 80 de votre machine est disponible.

#### Procédure

1. Naviguer jusqu'au répertoire principal du projet où se trouve le fichier `docker-compose.yml`.
2. Lancer la commande ci-dessous pour construire l'image docker liée à l'application et démarrer le conteneurs `web` :

```bash
docker-compose up --build
```
Une fois le conteneurs est lancé avec succès, ouvrez votre navigateur web et accédez à l'URL suivante :


```bash
http://localhost:80
```


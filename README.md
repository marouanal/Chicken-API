# Documentation de l'API Chicken

Cette API permet de gérer des informations sur les poulets (chickens) tels que leur nom, poids, date de naissance, nombre de pas effectués, et s'ils courent ou non.

## Prérequis

- Node.js (version 12 ou supérieure)
- MongoDB (instance locale ou hébergée)

## Installation

1. Clonez ce dépôt de code :


2. Accédez au répertoire du projet :

cd chicken-api


3. Installez les dépendances :

npm install


4. Configurez la base de données :

- Assurez-vous que MongoDB est en cours d'exécution.
- Dans le fichier `connect.js`, modifiez l'URL de connexion à votre base de données MongoDB, si nécessaire.

5. Démarrez l'application :

npm start


L'API sera disponible à l'adresse `http://localhost:3000`.

## Endpoints disponibles

- `POST /chicken` : Ajoute un nouveau chicken à la base de données.
- `GET /chicken` : Récupère tous les chickens de la base de données.
- `GET /chicken/:id` : Récupère les détails d'un chicken spécifique.
- `PATCH /chicken/:id` : Met à jour les informations d'un chicken spécifique.
- `PATCH /chicken/run/:id` : Incrémente le nombre de pas d'un chicken spécifique.
- `DELETE /chicken/:id` : Supprime un chicken de la base de données.

## Structure d'un chicken

Un chicken est représenté par un objet JSON avec les propriétés suivantes :

- `name` (string) : Le nom du chicken.
- `weight` (number) : Le poids du chicken en grammes.
- `birthday` (string) : La date de naissance du chicken au format ISO 8601 (AAAA-MM-JJ).
- `steps` (number) : Le nombre de pas effectués par le chicken.
- `isRunning` (boolean) : Indique si le chicken est en train de courir.

### Ajouter un chicken

POST /chicken
Body:
{
"name": "Coco",
"weight": 1000,
"birthday": "2022-01-01",
"steps": 0,
"isRunning": false
}


### Récupérer tous les chickens

GET /chicken


### Récupérer les détails d'un chicken spécifique

GET /chicken/:id


### Mettre à jour un chicken

PATCH /chicken/:id
Body:
{
"weight": 1200,
"isRunning": true
}


### Incrémenter le nombre de pas d'un chicken

PATCH /chicken/run/:id



### Supprimer un chicken

DELETE /chicken/:id


## Auteurs

- MAROUAN ALOUACHE



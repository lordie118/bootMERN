# Utiliser l'image officielle de Node.js comme base
FROM node:20

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "start"]

COPY .env ./
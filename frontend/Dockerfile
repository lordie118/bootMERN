# Utiliser une image de Node.js
FROM node:20

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application (si c'est une app React)
RUN npm run build

# Exposer le port 3000 pour le frontend
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]

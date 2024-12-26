const cron = require('node-cron');
const { sendEmail } = require('../middleware/sendEmail'); // Un service fictif pour envoyer des emails
const Task = require('./models/Task'); // Modèle de tâche

// Planification du cron job - Exécution chaque jour à minuit
cron.schedule('0 0 * * *', async () => {
    try {
        // Date actuelle
        const now = new Date();

        // Trouver les tâches dont la date d'échéance est proche (par exemple, dans les 24 prochaines heures)
        const soon = new Date();
        soon.setHours(soon.getHours() + 24); // 24 heures à partir de maintenant

        // Récupérer les tâches qui sont encore en attente et qui arrivent bientôt
        const upcomingTasks = await Task.find({
            dueDate: { $gte: now, $lte: soon },
            status: 'Pending',
        });

        // Envoyer un rappel pour chaque tâche à échéance proche
        upcomingTasks.forEach((task) => {
            // Exemple de fonction pour envoyer un email
            sendEmail(task); // Cette fonction devra être définie dans ton service email
        });

        console.log(`Rappels envoyés pour ${upcomingTasks.length} tâches.`);
    } catch (error) {
        console.error("Erreur dans le cron job des rappels :", error);
    }
});

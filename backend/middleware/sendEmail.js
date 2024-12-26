
const nodemailer = require('nodemailer');

const sendEmail = (task) => {
   


    // Configuration de l'email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'm.aamrane@mundiapolis.ma',
            pass: 'Lordie11@',
        },
    });

    const mailOptions = {
        from: 'm.aamrane@mundiapolis.ma',
        to: 'goatlordie@gmail.com',  // L'email de l'utilisateur lié à la tâche
        subject: `Rappel : La tâche "${task.title}" approche de l'échéance`,
        text: `Bonjour,\n\nN'oubliez pas que la tâche "${task.title}" doit être terminée d'ici le ${task.dueDate}.\n\nCordialement.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Erreur lors de l'envoi de l'email :", error);
        } else {
            console.log('Email envoyé : ' + info.response);
        }
    });
};
module.exports = sendEmail
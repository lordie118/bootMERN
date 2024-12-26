const genAI = require('../config/openaiConfig')
const Task = require('../models/Task')




const generteText = async (req, res) => {
    try {
      const { title } = req.body;
  
      // Access the generative model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      // Create prompt for description
      const descriptionPrompt = `Come up with 10 lines for a YouTube video called "${title}".`;
      const descriptionResult = await model.generateContent(descriptionPrompt);
      const descriptionResponse = await descriptionResult.response;
      const descriptionText = descriptionResponse.text();
  
      // Create prompt for tags
      const tagsPrompt = `Come up with 10 keywords for a YouTube video called "${title}".`;
      const tagsResult = await model.generateContent(tagsPrompt);
      const tagsResponse = await tagsResult.response;
      const tagsText = tagsResponse.text();
  
      // Send the response
      res.status(200).json({
        description: descriptionText,
        tags: tagsText,
      });
    } catch (error) {
      console.error("Error generating text:", error);
      res.status(500).json({ error: "Failed to generate text" });
    }
  };

  const chatWithAI = async (req, res) => {
    try {
      const { userMessage } = req.body; // Message envoyé par l'utilisateur
  
      if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
      }
  
      // Initialiser le modèle de génération de texte
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      // Démarrer une session de chat avec un historique vide
      const chat = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 500,
        },
      });
  
      // Ajouter le message de l'utilisateur à l'historique et obtenir la réponse
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const aiResponse = await response.text();
  
      // Renvoyer la réponse de l'IA
      res.status(200).json({
        userMessage,
        aiResponse,
      });
    } catch (error) {
      console.error("Error during chat:", error);
      res.status(500).json({ error: "Failed to generate chat response" });
    }
  };


  const handleTaskCommands = async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `L'utilisateur a envoyé : \"${message}\". Détermine s'il s'agit d'une commande pour :
        - Ajouter une tâche : {\"action\": \"add_task\", \"title\": \"Titre\", \"description\": \"Description\", \"dueDate\": \"YYYY-MM-DD\", \"priority\": \"Low|Medium|High\"}
        - Modifier une tâche : {\"action\": \"update_task\", \"taskId\": 123, \"title\": \"Nouveau titre\", \"description\": \"Nouvelle description\", \"dueDate\": \"YYYY-MM-DD\", \"priority\": \"Low|Medium|High\"}
        - Supprimer les tâches complétées : {\"action\": \"delete_completed_tasks\"}
        - Supprimer une tâche par ID : {\"action\": \"delete_task\", \"taskId\": 123}
        - Organiser les priorités : {\"action\": \"organize_priorities\"}
        - Envoyer des rappels automatiques : {\"action\": \"send_reminders\"}
        Sinon, réponds \"Commande non reconnue\".`;

        const aiResult = await model.generateContent(prompt);
        const aiResponse = await aiResult.response.text();

        try {
            const aiResponseJson = JSON.parse(aiResponse);
            switch (aiResponseJson.action) {
                case "add_task": {
                    const { title, description, dueDate, priority } = aiResponseJson;
                    if (!title) {
                        return res.status(400).json({ error: "Le titre de la tâche est manquant." });
                    }
                    const newTask = new Task({
                        title,
                        description: description || "",
                        dueDate: dueDate ? new Date(dueDate) : null,
                        priority: priority || "Low",
                        status: "Pending"
                    });
                    await newTask.save();
                    return res.status(200).json({ message: `Tâche ajoutée avec succès : \"${title}\".` });
                }
                case "update_task": {
                    const { taskId, title, description, dueDate, priority } = aiResponseJson;
                    const task = await Task.findById(taskId);
                    if (!task) {
                        return res.status(404).json({ error: "Tâche non trouvée." });
                    }
                    task.title = title || task.title;
                    task.description = description || task.description;
                    task.dueDate = dueDate ? new Date(dueDate) : task.dueDate;
                    task.priority = priority || task.priority;
                    await task.save();
                    return res.status(200).json({ message: "Tâche mise à jour avec succès." });
                }
                case "delete_completed_tasks": {
                    await Task.deleteMany({ status: "Completed" });
                    return res.status(200).json({ message: "Toutes les tâches complétées ont été supprimées." });
                }
                case "delete_task": {
                    const { taskId } = aiResponseJson;
                    const deletedTask = await Task.findByIdAndDelete(taskId);
                    if (!deletedTask) {
                        return res.status(404).json({ error: "Tâche non trouvée." });
                    }
                    return res.status(200).json({ message: `Tâche ${taskId} supprimée avec succès.` });
                }
                case "organize_priorities": {
                    const tasks = await Task.find({ status: "Pending" }).sort({ dueDate: 1 });
                    
                    const prioritizedTasks = tasks.map((task, index) => ({
                        ...task.toObject(),
                        priority: index + 1
                    }));

                    const tasksDescription = prioritizedTasks
                    .map((task) => `- Tâche : ${task.title}, Priorité : ${task.priority}, Échéance : ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "Aucune"}`)
                    .join("\n");

                    return res.status(200).json({
                      message: `Les priorités ont été organisées. Voici la liste des tâches :\n\n${tasksDescription}`,
                        tasks: prioritizedTasks
                    });
                }
                case "send_reminders": {
                    const now = new Date();
                    const soon = new Date();
                    soon.setHours(soon.getHours() + 24); // Prochaines 24 heures

                    const upcomingTasks = await Task.find({
                        dueDate: { $gte: now, $lte: soon },
                        status: "Pending"
                    });

                    const reminders = upcomingTasks.map(task => `Rappel : La tâche \"${task.title}\" est due le ${task.dueDate}.`);

                    return res.status(200).json({
                        message: `Rappels envoyés pour les tâches suivantes  :  \n\n${reminders}`,
                        tasks:reminders
                    });
                }
                default:
                    return res.status(200).json({ message: aiResponse });
            }
        } catch (error) {
            return res.status(200).json({ message: aiResponse }); // Si la réponse n'est pas un JSON valide, renvoyer la réponse telle quelle
        }
    } catch (error) {
        console.error("Erreur avec le chatbot :", error);
        res.status(500).json({ error: "Erreur serveur." });
    }
};



module.exports = {handleTaskCommands,chatWithAI,generteText}




// const generateImage = async(req,res)=>{
//     const image = await openai.image.create({
//         prompt : req.body.prompt,
//         n:1,
//         size: '512x512'
//     })
//     res.status(200).json({
//         url : image.data.data[0].url
//     })
// }


// function fileToGenerativePart(path,mimeType){
//     return {
//         inlineData : {
//             data : Buffer.from(fs.readFileSync(path)).toString("base64"),
//             mimeType
//         }
//     }
//  }
//  const imageSum = async (req,res) =>{
// try{ 
    

//     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//     const prompt =""
//     const imageParts = [fileToGenerativePart('jpeg-home.jpg',"image/jpeg")];

//        const result = await model.generateContent([prompt,...imageParts]);
//        const response = await result.response;
//        const text = response.text()
//        res.status(200).json({ summary: text });
//     } catch (error) {
//         console.error("Error processing image:", error);
//         res.status(500).json({ error: "Failed to process the image" });
//       }
//  }
  
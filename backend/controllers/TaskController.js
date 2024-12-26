const Task = require('../models/Task')
const mongoose = require('mongoose')

const Filter = async (req,res) =>{
    try {
        const { priority, dueDate, status } = req.query;
        let filter = {};

        if (priority) {
            filter.priority = priority; // Filtrer par priorité
        }
        if (dueDate) {
            filter.dueDate = { $lte: new Date(dueDate) }; // Filtrer par date d'échéance
        }
        if (status) {
            filter.status = status; // Filtrer par statut (e.g., "Completed", "Pending")
        }

        const tasks = await Task.find(filter).sort({ createdAt: 1 }); // Trier par date de création (ou autre)

        // Ajouter un index à chaque tâche filtrée
        const tasksWithIndex = tasks.map((task, index) => ({
            ...task.toObject(), // Convertir en objet JS standard
            index: index + 1,  // Ajouter l'index (commence à 1)
        }));
        res.status(200).json(tasksWithIndex);
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la récupération des tâches" });
    }
}

const Search = async (req,res )=>{
    const { keyword } = req.query;

    try {
        const tasks = await Task.find({
            $or: [
                { title: { $regex: keyword, $options: "i" } }, // Recherche par titre
                { description: { $regex: keyword, $options: "i" } } // Recherche par description
            ]
        });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la recherche des tâches." });
    }
}


const CreateTask = async (req ,res) =>{
   const {title, description , dueDate, priority,status} = req.body

   try {
       const task = await Task.create(req.body)
       res.status(201).json(task)
   } catch (error) {
     res.status(404).json({msg : error.message})
   }
}


const AllTask = async (req,res)=>{

    try {
        const tasks = await Task.find({}).sort({ createdAt: 1 }); // Trier les tâches si nécessaire
        const tasksWithIndex = tasks.map((task, index) => ({
            ...task.toObject(),
            index: index + 1, // Ajouter un champ `index`
        }));
        res.status(200).json(tasksWithIndex);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des tâches." });
    }
}

const GetTask = async (req,res)=>{
    const {id} = req.params
    
    const task = await Task.findById(id)
    if(!task){
        res.status(404).json('no such task ')
    }else{
        res.status(201).json(task)
    }
        
}

const DeleteTask = async (req,res) =>{
    const {id} = req.params
    const task = await Task.findOneAndDelete({_id:id});
    if(!task){
        res.status(404).json({err : 'no such workout to delete'})
    }
    res.status(200).json({msg: "delete successfully"})

}
const UpdateTask = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const task = await Task.findOneAndUpdate({_id:id},{...req.body});

    if(!task){
        res.status(404).json({error : 'no such workout to delete'})
    }
    res.status(200).json({msg: "update successfully"})


}

module.exports={CreateTask,AllTask,GetTask,DeleteTask,UpdateTask,Filter,Search}
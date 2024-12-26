const mongoose=require('mongoose')
// const shortid = require("shortid");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
  
    description: String,
    dueDate: Date,
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
    status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
    // shortId: { type: String,unique: true  ,default: shortid.generate }, 

})

module.exports = mongoose.model('Task',TaskSchema)
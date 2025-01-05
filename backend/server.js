const express = require('express')
const mongoose = require('mongoose')
const db= mongoose.connection;
const router = require('./router/route')
const TaskRouter = require('./router/route2')
const OpenaiRouter = require('./router/openAIRouter');
const axios  = require('axios');
const cors = require('cors')
require('dotenv').config();
const app =express()

mongoose.connect('mongodb://localhost:27017/bootapp',{
    
})

app.use(cors())
app.use(express.json())
app.use('/users' , router)
app.use('/tasks' , TaskRouter)

app.use('/openai', OpenaiRouter );

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

db.on("error",console.error.bind(console , "connection error :"))
db.once("open", function(){
    console.log("database connected successfully...");
    
})



app.listen(process.env.PORT, ()=>{
    console.log('app listning on port 1000');
})
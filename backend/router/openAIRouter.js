const express=require('express');
const router= express.Router();
const upload = require("../middleware/upload"); 
const {generteText,chatWithAI,handleTaskCommands} = require('../controllers/openaiController');

router.post('/tasks',handleTaskCommands)
// router.post('/image',generateImage)
router.post('/text',generteText)
router.post('/chat', chatWithAI);







module.exports=router

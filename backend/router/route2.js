const express=require('express');
const router= express.Router();

const {CreateTask,GetTask,AllTask,DeleteTask,UpdateTask,Filter,Search} = require('../controllers/TaskController');

router.post('/create',CreateTask)
router.get('/getall',AllTask)
router.get('/tasks',Filter)
router.get('/search',Search)
router.get('/:id',GetTask)
router.delete('/:id',DeleteTask)
router.put('/update/:id',UpdateTask)




module.exports=router
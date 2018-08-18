const express = require('express');
const router = express.Router();

const Task = require('../models/task');
router.get('/',async (req,res)=>{
    await Task.find({},(err,tasks)=>{
    res.json(tasks);
});
});

router.post('/',async (req,res)=>{
    const {title,description} =  req.body;
    const task = new Task({title,description});
    await task.save();
    console.log(task);
    res.json({status:'received'});
})


router.put('/:id',async (req,res)=>{
    const {title,description} = req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    console.log(req.params.id);
    res.json({status:'updated'});
})



router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    console.log(req.params.id);
    res.json({status:'removed'});
})
module.exports = router;
const express = require("express");
const router = express.Router();

const Lecture = require("../modules/luctures.modules");

router.post("", async(req,res)=>{
    try{
        const lectures = await Lecture.create(req.body);
        return res.status(201).send(lectures)
    }
    catch(error){
        return res.status(500).send(lectures);
    }
})

router.get("", async(req,res)=>{
    try{
        const lectures = await Lecture.find().lean().exec();
        return res.status(201).send(lectures);
    }   
    catch(error){
        return res.status(500).send(lectures);
    }
})

module.exports = router;
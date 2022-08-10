const express = require("express");
const router = express.Router();

const Assignment = require("../modules/assignments.modules");

router.post("", async(req,res) => {
    try{
        const assignment = await Assignment.create(req.body);
        return res.status(201).send(assignment);
    }
    catch(error){
        return res.status(500).send(assignment);
    }
})

router.get("", async(req,res) => {
    try{
        const assignment = await Assignment.find().lean().exec();
        return res.send(assignment);
    }
    catch(error){
        return res.status(500).send(assignment);
    }
})
module.exports = router;
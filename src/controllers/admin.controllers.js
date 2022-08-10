const express = require("express");
const router = express.Router();

const Admin = require("../modules/admin.modules");

router.post("", async(req,res)=>{
    try{
        const admin = await Admin.create(req.body);
        return res.status(201).send(admin);
    }
    catch(error){
        return res.status(500).send(admin);
    }
})

router.get("", async(req,res)=>{
    try{
        const admin = await Admin.find().lean().exec();
        return res.status(201).send(admin);
    }
    catch(error){
        return res.status(500).send(admin);
    }
})

module.exports = router;
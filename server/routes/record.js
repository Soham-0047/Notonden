
const { verifytoken, verifyTokenAndAuth } = require("./verifytoken");

const router = require("express").Router();



const Record = require("../models/Record")


router.post("/",async(req,res) =>{

    const newrecord =new Record(req.body)

    try {
        const saverecord = await newrecord.save();

        res.status(200).json(saverecord);

    } catch (error) {
        res.status(500).json(error)
    }
})

//update

router.put("/update/:id",async(req,res) =>{

    try {
        
        const updaterecord = await Record.findByIdAndUpdate(req.params.id, {
            $set:req.body
        },{new:true})

        res.status(200).json(updaterecord)
    } catch (error) {
        res.status(500).json(error)
    }
})




router.delete("/delete/:id",async(req,res) =>{

    try {
        await Record.findByIdAndDelete(req.params.id)

        res.status(200).json("Record has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get("/find/:id",async(req,res) =>{

    try {
        
        const record = await Record.findById(req.params.id);

        res.status(200).json(record);

    } catch (error) {
        
        res.status(500).json(error);

    }
})

router.get("/",async(req,res) =>{

    try {
        let records = await Record.find()

        res.status(200).json(records)
    } catch (error) {
        res.status(500).json(error)
    }
    

})
module.exports = router
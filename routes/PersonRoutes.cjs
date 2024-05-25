const express=require('express')
const Person=require('../modal/person.cjs')
const router=express.Router()
router.put('/:id',async (req,res)=>{
    try{
       const AccessID=req.params.id
       const PersonItem=req.body
       const response= await Person.findByIdAndUpdate(AccessID,PersonItem,{
        new:true,
        runvalidator:true

       })
       console.log(response)
       res.status(200).json('Successfully')
    }catch(err){
        console.log(err)
        res.status(500).json('   Dissucessfully Saved')
    }
})
router.delete('/:id',async (req,res)=>{
    try{
       const AccessID=req.params.id
       const response= await Person.findByIdAndDelete(AccessID)
       console.log(response)
       res.status(200).json('Successfully')
    }catch(err){
        console.log(err)
        res.status(500).json('  Dissucessfully Saved')
    }
})
module.exports=router
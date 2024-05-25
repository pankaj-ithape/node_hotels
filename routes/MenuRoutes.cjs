const express=require('express')
const Menu=require('../modal/menu.cjs')
const { default: Person } = require('../modal/person.cjs')
const router=express.Router()
router.post('/',async (req,res)=>{
    try{
        const data=req.body
        const response=new Menu(data)
        const resp=await response.save()
        console.log('suceesfully added')
        res.status(200).json("succesfully added")
    }catch(err){
        console.log(err)
        res.status(500).json("dissuccesfully added")

    }

})
router.get('/',async (req,res)=>{
    try{
        const response=await Menu.find()
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json("dissuccesfully added")

    }
})
router.put('/:id',async (req,res)=>{
    try{
        const MenuId=req.params.id
        const data=req.body
        const response=await Menu.findByAndUpdate(MenuId,data,{
            new:true,
            newvalidators:true
        })
        console.log('suceesfully added')
        res.status(200).json("succesfully added")
    }catch(err){
        console.log(err)
        res.status(500).json("dissuccesfully added")
    }
})
router.delete('/:id',async (req,res)=>{
    try{
        const MenuId=req.params.id
        const response=await Menu.findByIdAndDelete(MenuId)
        console.log('suceesfully added'+response)
        res.status(200).json("succesfully added")
    }catch(err){
        console.log(err)
        res.status(500).json("dissuccesfully added")
    }
})
module.exports=router
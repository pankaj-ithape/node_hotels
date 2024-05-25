
const express=require('express')

const db=require('./db.cjs')
const Person=require('./modal/person.cjs')
const MenuRoutes=require('./routes/MenuRoutes.cjs')
const bodyparser=require('body-parser')
const PersonRoutes=require('./routes/PersonRoutes.cjs')

const app=express()
app.use(bodyparser.json())
app.use('/person',PersonRoutes)
app.use('/menu',MenuRoutes)
app.post('/person',async (req,res)=>{
    try{
       const data=req.body
       const newPerson=new Person(data)
       const response=await newPerson.save()
       console.log("data saved")
       res.status(200).json('   Sucessfully Saved'+response)
    }catch(err){
        console.log(err)
        res.status(500).json('   Dissucessfully Saved')
    }
})
app.get('/person',async (req,res)=>{
    try{
      const data=await Person.find()
      console.log("Get Sucessfully")
      res.status(200).json(data)
    }catch(err){
      console.log("Dissuceesfully")
    }
})
app.listen(5656)

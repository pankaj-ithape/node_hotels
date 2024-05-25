const mongoose=require('mongoose')
const PersonSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    address:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:Number
    }
})
const Person=new mongoose.model("person",PersonSchema)
module.exports=Person
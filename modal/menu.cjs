const mongoose=require('mongoose')
const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    picsy:{
        type:String,
        required:true,
        enum:["low","medium","picsy"]
    }
})
const Menu=new mongoose.model("menu",MenuSchema)
module.exports=Menu
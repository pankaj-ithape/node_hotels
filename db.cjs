const mongoose=require('mongoose')
const mongoURL='mongodb://0.0.0.0:27017/Person'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection
db.on('connected',()=>{
    console.log("Database Connect")
})
db.on('error',(err)=>{
    console.log("Error"+err)
})
module.exports=db
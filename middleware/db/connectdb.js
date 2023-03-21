const mongoose=require('mongoose')

module.exports.connectDb  = ()=>{
    mongoose.set('strictQuery', true);  
    mongoose.connect(process.env.KASUWA_dbURI, {useNewurlParser:true,useUnifiedTopology:true,})
    .then(()=>console.log("connected to database"))
    .catch((err)=>console.log("database error"))  
}
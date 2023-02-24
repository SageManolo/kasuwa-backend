
const express=require('express');
const ejs=require('ejs')
require('dotenv').config();
const mongoose=require('mongoose')
const Commodity= require("../models/commodity");
const adminroutes = require("../routes/adminroutes")
// const { db } = require('./models/commodity');
const app=express()
app.use(express.json())
app.set('view engine', 'ejs');
const port=process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// const {authpage, authuser} =require('./middleware')

const dbURI=process.env.KASUWA_dbURI
app.use(express.static('public'))

// mongoose.set('strictQuery', true);  
mongoose.connect(dbURI, {useNewurlParser:true,useUnifiedTopology:true,})
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))   

app.get("/", (req, res)=>{
  Commodity.find()
  .then(response=>{
    res.json(response)
  })
  .catch(err=>{
    res.json(err)
  })
})


app.use('/admin', adminroutes)



app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})




  
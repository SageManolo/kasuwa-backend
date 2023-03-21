
const express=require('express');
const ejs=require('ejs')
require('dotenv').config();
const mongoose=require('mongoose')
const Db = require('./middleware/db/connectdb')
// import { connectDb } from './middleware/db/connectdb';
const Commodity= require("./middleware/db/models/commodity");
const adminroutes = require("./routes/adminroutes")
const publicroutes = require("./routes/publicroutes")
const app=express()
fs = require("fs")
const cookieParser = require('cookie-parser');
const path = require('path')
const cors = require('cors');


 

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
// connect database
Db.connectDb()


app.use(express.static(path.resolve(__dirname, '../kasuwa-react/dist')))


app.set('view engine', 'ejs');

const port=process.env.PORT || 9000;




const dbURI=process.env.KASUWA_dbURI
// app.use(express.static('public'))

// mongoose.set('strictQuery', true);  
// mongoose.connect(dbURI, {useNewurlParser:true,useUnifiedTopology:true,})
// .then(()=>console.log("connected to db"))
// .catch((err)=>console.log(err))   



app.use('/public', publicroutes)
app.use('/admin', adminroutes)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../kasuwa-react/dist', 'index.html'));
});

app.listen(port, () => { 
  console.log(`Kasuwa app listening on port ${port}`)
})




  
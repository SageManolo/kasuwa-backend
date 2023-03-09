
const express=require('express');
const ejs=require('ejs')
require('dotenv').config();
const mongoose=require('mongoose')
const Commodity= require("./models/commodity");
const adminroutes = require("./routes/adminroutes")
const publicroutes = require("./routes/publicroutes")
const app=express()
fs = require("fs")
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash')
const cors = require('cors');

 

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
// app.use(session({ secret:process.env.SESSION_KEY }));
app.use(flash());
app.use(cors({
    origin: '*'
}));



app.use(express.static(__dirname + "/dist"))
app.use('/static', express.static(__dirname + '/dist'))
var indexPage = fs.readFileSync(__dirname + '/dist/index.html', 'utf8')


app.set('view engine', 'ejs');
const port=process.env.PORT || 9000;


const dbURI=process.env.KASUWA_dbURI
app.use(express.static('public'))

mongoose.set('strictQuery', true);  
mongoose.connect(dbURI, {useNewurlParser:true,useUnifiedTopology:true,})
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))   



app.use('/public', publicroutes)
app.use('/admin', adminroutes)


app.get("*", function (req, res){
  return res.send(indexPage)
})

app.listen(port, () => { 
  console.log(`node Kasuwa listening on port ${port}`)
})




  
const express = require("express");
require("dotenv").config();
const router = express.Router();
const jwt = require("jsonwebtoken");
const Commodity = require("../models/commodity");
const auth = require("../middleware/auth");



router.get("/pricehistory", (req, res)=>{
  Commodity.find().sort({ _id: -1 })
  .then(response=>{
    res.json(response)
  })
  .catch(err=>{
    res.json(err)
  })
})

router.get("/login", (req, res) => {
  res.render("adminLogin");
});

router.post("/login", (req, res) => {
  console.log("got a log in request");
  const { username, password } = req.body;
 

  try {
    const { uername, password } = req.body;
    const user = req.body;

    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    if (username != process.env.USER_ID && password != process.env.USER_KEY) {
      console.log("hellllllo");

      res.status(400).send("Unauthorized Access");
    }
    if (username == process.env.USER_ID && password == process.env.USER_KEY) {
      const accessToken = jwt.sign({username:user.username, password:user.password}, process.env.TOKEN_KEY);

      res.cookie("kasuwa-access",accessToken, { maxAge: 1000*60*60 })

      return res.redirect("/admin");
    }
    else{
    return res.status(400).send("cant validate request");

    }
  } catch (err) {
    return res.status(400).send("Invalid Credentials");
  }
});

router.get("/",auth, async (req, res) => {
  try {
    Commodity.find()
      .sort({ _id: -1 })
      .limit(1)
      .then((result) => {
        res.render("index", { commodities: result, message:"ENSURE TO VALIDATE EVERY DELETE BY UPDATING THE DATABASE ON DELETING A COMMODITY" });
      });
  } catch (err) {
    res.status(500).json({message:err.message})
  }
});

router.get("/addcommodity",auth, (req, res) => {
  res.render("addcommodity",);
});


router.post("/addcommodity",auth, (req, res) => {
  const newCommodity = Commodity.find()
    .sort({ _id: -1 })
    .findOneAndUpdate(   
      { name: "commodities" },
      { $push: { commodities: req.body } },
        { upsert: false },
      function (err, passed) {
        if (err) {
          res.send(`collection error <a href='/admin'>home<a/>`);
        } else {
          res.redirect("/admin");

        }
      } 
    );
});
 
router.post("/updateAll",auth, (req, res) => {
  const newCommodity = Commodity.create({
    name: "commodities",
    commodities: req.body.commodities,
  })
    .then((result) => {
      result.save();  
      return res.json(result)
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

router.delete("/delete:id/commodities/:item_id",auth, (req, res) => {
  let Object_id = req.params.id.slice(1);
  let commod_id = req.params.item_id.slice(1);


  const newCommodity = Commodity.findByIdAndUpdate({ _id:Object_id}, {
    $pull: {
        commodities: {_id: commod_id},
    },
})
.then(result=>{
  if(result.commodities.length==1){
    result.remove()

  }
  res.json(result)

}).catch(err=>console.log(err)) 
  
});

router.get("*", (req, res)=>{
  res.redirect("/")
  })


module.exports = router;

const express = require("express");
const router = express.Router();
const Commodity = require("../models/commodity");


router.get("/", (req, res)=>{
    Commodity.find().sort({ _id: -1 }).limit(2)
    .then(response=>{
      res.json(response)
    })
    .catch(err=>{
      res.json(err)
    })
  })

  router.get("*", (req, res)=>{
    res.redirect("/")
    })


 module.exports = router;
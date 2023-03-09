const jwt = require("jsonwebtoken")
require('dotenv').config();

const auth = (req, res, next)=>{
  const accessToken = req.cookies['kasuwa-access']

   if (accessToken == null) return res.sendStatus(401)
   if (!accessToken) return res.Status(401).json({ERROR:"ACCESS DENIED"})

   try{
    const validToken = jwt.verify(accessToken, process.env.TOKEN_KEY)
    if(validToken){
      req.authenticated= true
      // console.log(validToken)
      return next();

    }
   }
   catch(err){
    return res.status(400).json({error:"access denied"})
   }
  //  jwt.verify(accessToken, process.env.TOKEN_KEY,  (err, user)=>{
  //   if (err) return res.sendStatus(403)
  //   req.body = user
  //   next()
  //  })
}

module.exports = auth;
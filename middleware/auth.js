const jwt = require("jsonwebtoken")
require('dotenv').config();

const auth = (req, res, next)=>{
  const authHeader =req.headers["authorization"]

  console.log(authHeader)
   const token = authHeader && authHeader.split(' ')[1]
   if (token == null) return res.sendStatus(401)

   console.log("token")

   jwt.verify(token, process.env.TOKEN_KEY,  (err, user)=>{
    if (err) return res.sendStatus(403)
    req.user = user
    next()
   })
}

module.exports = auth;
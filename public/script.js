// {/* <script> */}
// app.get("/update-commodity", (req, res)=>{
//   const commodity= new Commodity({commodities:[{
//     commodityName:"rice",
//     price:30,
//     percentage1hr:2,
//     percentage24hr:5,
//     percentage7d:17,
//     percentage30d:8
//   },
//   {
//     commodityName:"groudnut",
//     price:40,
//     percentage1hr:7,
//     percentage24hr:9,
//     percentage7d:22,
//     percentage30d:14
//   },
//   {
//     commodityName:"sorghum",
//     price:40,
//     percentage1hr:7,
//     percentage24hr:6,
//     percentage7d:11,
//     percentage30d:13
//   },
//   {
//     commodityName:"millet",
//     price:60,
//     percentage1hr:12,
//     percentage24hr:15,
//     percentage7d:4,
//     percentage30d:13
//   },
//   {
//     commodityName:"wheat",
//     price:30,
//     percentage1hr:2,
//     percentage24hr:5,
//     percentage7d:17,
//     percentage30d:8
//   },
//   {
//     commodityName:"cowpea",
//     price:40,
//     percentage1hr:13,
//     percentage24hr:6,
//     percentage7d:9,
//     percentage30d:12
//   },
//   {
//     commodityName:"soyabeans",
//     price:60,
//     percentage1hr:21,
//     percentage24hr:13,
//     percentage7d:8,
//     percentage30d:19
//   },
//   {
//     commodityName:"maize",
//     price:90,
//     percentage1hr:24,
//     percentage24hr:2,
//     percentage7d:0,
//     percentage30d:13
//   }
// ]})

//   Commodity.update(
//     { name: 'commodities' }, 
//     { $pull: {commodities:req.body}, },
//     { upsert: false },
//     function(err, passed){
//       if(err){
//         res.json(err)
        
//       } else{
//         console.log(passed)
//         res.send(`item sucessfully deleted <a href='/admin'>home<a/>`)
//       }
//     }
// )
// });


//     commodity.save()
//     .then((result)=>{
//       res.send(commodity)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   })


// {
//   "commodityName":"sorghum",
//   "price":40,
//   "percentage1hr":7,
//   "percentage24hr":6,
//   "percentage7d":11,
//   "percentage30d":13
// }
  
//   //   const findPercentages= (commodity)=>{
//   //     const prices= Array.from(document.querySelectorAll(".price"));
//   //     const comm_odity= Array.from(document.querySelectorAll(".commod"))
  
//   //     prices.map(price=>{
//   //       console.log(price)
//   //     })
      
//   //     comm_odity.forEach((commodity)=>{
//   //       console.log(commodity.textContent)
//   //     })
    
//   //   }
//   //   document.getElementById("btn").style.background="red"
//   //  console.log("script loads first")
//   //   console.log(btn)
//     // console.log('helooooooooooooooooo')
  
//   {/* </script> */}
//   {commodities:
//     [{
// commodityName:{
//     type: String,
//     required: true,
// },
// price:{
//     type:String,
//     required:true,
// },
// percentage1hr:{
//     type:Number,
//     required:true,
// },
// percentage24hr:{
//     type:Number,
//     required:true,
// },
// percentage7d:{
//     type:Number,
//     required:true,
// },
// percentage30d:{
//     type:Number,
//     required:true,
// }
// },
// {
// commodityName:{
//     type: String,
//     required: true,
// },
// price:{
//     type:String,
//     required:true,
// },
// percentage1hr:{
//     type:Number,
//     required:true,
// },
// percentage24hr:{
//     type:Number,
//     required:true,
// },
// percentage7d:{
//     type:Number,
//     required:true,
// },
// percentage30d:{
//     type:Number,
//     required:true,
// }
// },
// {
// commodityName:{
//     type: String,
//     required: true,
// },
// price:{
//     type:String,
//     required:true,
// },
// percentage1hr:{
//     type:Number,
//     required:true,
// },
// percentage24hr:{
//     type:Number,
//     required:true,
// },
// percentage7d:{
//     type:Number,
//     required:true,
// },
// percentage30d:{
//     type:Number,
//     required:true,
// }
// },
// {
// commodityName:{
//     type: String,
//     required: true,
// },
// price:{
//     type:String,
//     required:true,
// }
// }]}


// router.post("/login", async(req, res)=>{
//   console.log(req.body)
//   const {username, password}= req.body
//   console.log(username)
//   console.log(password)

//   // Our register logic starts here
//   try {
//       // Get user input
//       const { username, password } = req.body;
  
//       // Validate user input
//       if (!(username && password)) {
//         res.status(400).send("All input is required");
//       }
//       if(username !==process.env.USER_ID && password !==process.env.USER_KEY){
//           console.log("hellllllo")

//           res.status(400).send("Unauthorized Access");
//       }
      
//       if (username ==process.env.USER_ID && password ==process.env.USER_KEY)  {
//           // Create token
//           console.log("hello")
//           const token =await jwt.sign(
//               { user_id: user._id, email },
//               process.env.TOKEN_KEY,
//               {
//                 expiresIn: "5h",
//               }
//             );
      
//           console.log("hello")
//       // save user token
//       user.token = token;
//       // console.log(token, user.token)

  
//       // return admin
//       return res.cookie({"token":token}).json({success:true,message:'LoggedIn Successfully'})
     
//       // res.redirect('/')
//       return res.status(200).json(user);
//     } 
//   }
//   catch(err) {
//       return (res.status(400).send("Invalid Credentials"));
//       // res.json(err)
//     }
  
  
//     // Our register logic ends here
//   });
//   try {
//     let newcommodity = Commodity.find()
//        .sort({ _id: -1 })
//        .limit(1)
//        .then((result) => {
//         let  a=new Commodity (result[0].commodities.filter(commod=>commod._id!=commod_id))
//         console.log(a)
//        //  return res.render("index", { commodities: a });
 
//        });
//    } catch (err) {
//      res.status(500).json({message:err.message})
//    }
//  });


 

//   // Commodity.find()
//   // .sort({ _id: -1 })
//   // .limit(1)
//   // .then(result=>{
//   //   console.log(result.commodities)
//   // })
//   // .catch(err=>console.log(err))

//   const newCommodity = Commodity.find()
//   .sort({ _id: -1 }) 
//   .updateOne(
//     { name: "commodities" },
//     { $pull: { commodities: id } },
//       // { upsert: false },
//     function (err, passed) {
//       if (err) {
//         console.log("error")
//         res.json(`collection error <a href='/admin'>home<a/>`);
//       } else {
//         console.log(passed)
//         // passed.save()
//         // console.log(passsed)
//         // res.redirect("/admin");

//         return  res.json(`item sucessfully deleted <a href='/admin'>home<a/>`)
//       }
//     }
//   );

//   router.delete("/deletecommodity", (req, res) => {
//     let id = "63f4720502f3c6c87a55ce5e";
//     Commodity.find()
//       .sort({ _id: -1 })
//       .findOneAndUpdate(
//         { name: "commodities" },
//         { $pull: { commodities: id } },
//         // { upsert: false },
//         function (err, passed) {
//           if (err) {
//             res.json(err);
//           } else {
//             res.send(`item sucessfully deleted <a href='/admin'>home<a/>`);
//           }
//         }
//       );
//   });
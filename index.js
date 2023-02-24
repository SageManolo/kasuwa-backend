const http = require("http");
// const app= require("./app");
const server = http.createServer(app);


const API_PORT= process.env;
const port =API_PORT || process.env.PORT 



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
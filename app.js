const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")


app.use(bodyParser.json())
const postsroute = require("./posts")
app.use("/posts",postsroute)


app.get("/",(req,res)=>{res.send("hi you are on home page");})






mongoose.connect(process.env.DBCONNECTION,{useNewUrlParser:true})
  .then(() => console.log("Connected to DBCONNECTION"))
  .catch(error => handleError(error));


app.listen(3000,()=>console.log("listening on port 3000"))
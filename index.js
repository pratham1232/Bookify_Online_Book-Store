const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;
//Connecting MongoDB Database
mongoose.connect("mongodb://localhost:27017/bookify").
then(()=>console.log("Mongo DB is Connected!")).
catch((err)=>console.log(err))
//Setting up EJS
app.set("view engine","ejs");
app.set("Views",path.resolve("./Views"));
app.use(express.static(path.resolve("./Public")))
app.get("/",(req,res)=>{
    return res.render("home");
})

//Listening Up PORT
app.listen(PORT,()=>console.log("Server Started on PORT",PORT));
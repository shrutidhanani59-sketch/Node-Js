const express = require("express");

// connect mongo
const mongoose = require("mongoose");

const app = express();

// connect mongo
mongoose.connect("mongodb://127.0.0.1:2707/demo").then(()=>{
    console.log("suceess");
}).catch(()=>{
    console.log("error");
});

app.get("/" , (req , res)=>{
    res.send("home page2");
})

app.listen(3000);
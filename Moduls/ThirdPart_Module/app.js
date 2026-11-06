const express = require("express");
const app = express();

// Create Home Page
app.get("/" , (req , res)=>{
    res.send("hello Home");
});

// Create About Page
app.get("/about" , (req , res)=>{
    res.send("Hello About");
});

app.listen(3000);
const express = require("express");
const app = express();

// Routing

app.get("/" , (req, res)=>{
    res.send("Home Page");
});

app.listen(3000);

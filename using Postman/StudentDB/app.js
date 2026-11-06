import express from "express";

const app = express(); 

const users = [
    {
        id: 1001,
        name: "raj",
        lname : "patel"
    },

    {
        id: 1002,
        name: "rajveer",
        lname : "patel"
    }
]

app.get("/" , (req , res)=>{
    res.send("About Page");
});

app.get("/reterivatedata" , (req , res)=>{
    res.json({
        msg:"hello",
        data:users
    })
})

app.listen(3000);
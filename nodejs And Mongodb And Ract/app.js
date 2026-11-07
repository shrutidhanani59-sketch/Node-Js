import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/empoyee");

const empoyeeSchema = mongoose.Schema({
    empname : String,
    empdepartment : String,
    empsalary : Number
});

const empoyee = mongoose.model("empoyee" ,  empoyeeSchema);

app.get("/" , (req ,res)=>{
    res.json({
        message : "Home Page",
        empoyee : data
    })
})

app.listen(3000);
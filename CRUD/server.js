import express from "express"
import mongoose from "mongoose"


const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/studentdata").then(()=>{
    console.log("sucess");
}).catch(()=>{
    console.log("error");
});

const studentSchema = mongoose.Schema({
    email :{
        type : String,
        unique : true,
        required : true
    }, 
    fname : String,
    age : Number
});

const Student = mongoose.model("student" , studentSchema);

app.get("/" , async (req , res)=>{
       const student = await Student.find();
    res.json({
        msg : "data",
        data : student
    })
})

app.listen(3000);
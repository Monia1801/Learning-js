const express= require("express");
const mongoose = require('mongoose');

const app=express();
const PORT=3000;

const URI="mongodb+srv://moniavoona18_db_user:msJBgsOssU0iwq9I@cluster0.hhvijob.mongodb.net/?appName=Cluster0";
mongoose.connect(URI)
  .then(()=>{
    console.log("MongoDB connected successfully");
  })
  .catch((error)=>{
    console.log(`Error connecting the DB ${error.message}`);
  });

const taskSchema = new mongoose.Schema({
title:{
  type: String,
  required:true,
},
completed:{
  type: Boolean,
  default:false,
},
});

const task=mongoose.model("Task",taskSchema);

task.create({
  title:"Coding",
}).then((savedDoc)=>{
  console.log(savedDoc)
}).catch((error)=>{
  console.log(error)
});


app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});
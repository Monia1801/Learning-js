const express= require("express");
const router=express.Router();

router.get("/",(req,res)=>{
  res.send("Home page of posts");
});

router.get("/settings",(req,res)=>{
  res.send("Settings page of posts");
});

router.get("/profile",(req,res)=>{
  res.send("Profile page of posts");
});

module.exports=router;


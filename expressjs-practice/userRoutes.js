const express= require("express");
const router=express.Router();

router.get("/",(req,res)=>{
  res.send("Home page of user");
});

router.get("/settings",(req,res)=>{
  res.send("Settings page of user");
});

router.get("/profile",(req,res)=>{
  res.send("Profile page of user");
});

module.exports=router;


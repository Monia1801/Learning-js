const express= require("express");
const path=require("path");

//INSTANCE OF EXPRESS
const app=express();

//SET EJS AS THE VIEW ENGINE
app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,"views"));

//MIDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get("/",(req,res)=>{
  res.render("home.ejs");
});

app.get("/variables",(req,res)=>{
  res.render("variables.ejs",{
    title:"EJS Variables v1",
    user:{
      isLoggedIn:true,
    },
  });
});

//START THE SERVER
app.listen(3000,()=>{
  console.log("Server is running on the port 3000");
});

const express = require('express');
const app = express();

const userRouter=require("./userRoutes");
const postRouter=require("./postsRoutes");

app.use("/users",userRouter);
app.use("/posts",postRouter);

app.listen(3000,()=>{
  console.log(`Server running at http://localhost:3000`);
});
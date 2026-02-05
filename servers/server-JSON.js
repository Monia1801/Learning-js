const http=require('http');

const server=http.createServer((req,res)=>{
  res.setHeader("content-type","application/json");
  if(req.url==='/' && req.method==="GET"){
    res.statusCode=200;
    res.end(JSON.stringify(
      {message: "Welcome to home page"}
    ));
  }

  else if(req.url==='/users' && req.method==='GET'){
    res.statusCode=200;
    const users=[{id:1421,name:"monia"},{id:1422,name:"xyz"}];
    res.end(JSON.stringify(users));
  }

  else{
    res.statusCode=404;
    res.end(JSON.stringify({message:"Error,Page not found"}));
  }
});

const PORT=5000;

server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Click Ctrl+C to stop the server ");
})
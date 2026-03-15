const http=require('http');

const server=http.createServer((req,res)=>{
  res.setHeader("content-type","text/plain");
  if(req.url==='/' && req.method==="GET"){
    res.statusCode=200;
    res.end("Welcome to home page");
  }

  else if(req.url==='/about' && req.method==='GET'){
    res.statusCode=200;
    res.end("Welcome to about page");
  }

  else{
    res.statusCode=404;
    res.end("Error,Page not found");
  }
});

const PORT=5000;

server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Click Ctrl+C to stop the server ");
})
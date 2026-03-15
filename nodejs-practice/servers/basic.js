const http=require('http');

//create a server
const server=http.createServer((req,res)=>{
  console.log(`Received ${req.method} request for:${req.url}`);

  //set status code and headers
  res.writeHead(200,{"content-type":"text/plain"});

  //send the response
  res.end('hello world,this is my first nodejs server');
});

//define port
const PORT=5000;

//start the server
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
})
const http=require('http');
const fs=require('fs');

//One Approach

// function  rqListner(req,res){

// }

// http.createServer(rqListner);

//Another approach

//  http.createServer(function (req,res){

//  });

//Flat arrow function Approach

const server=http.createServer((req,res)=>{
    //  console.log(req);
    //  process.exit();  

    // console.log(req.headers,req.method,req.url);

    const url=req.url;
    const method=req.method;

    if(url === '/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
          fs.writeFileSync('message.txt','DUMMY');
          res.statusCode=302;
          res.setHeader('Location','/');
          return res.end();
    }
       
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page on NodeJS</title></head>');
    res.write('<body><h1>Hello from NodeJS Server !!!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

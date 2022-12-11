const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page on NodeJS</title></head>');
    res.write('<body><h1>Abhishek Gujar</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);

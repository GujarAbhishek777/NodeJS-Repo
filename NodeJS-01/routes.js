
   const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url === '/'){
        const filePath=path.join(_dirname,"message.txt");

        fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
        });
        console.log(`data from file`+data);
        
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/message' && method === 'POST'){

          req.on("data",(chunk)=>{
            body.push(chunk);
          });

          return req.on("end",()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split("=")[1];
            fs.writeFile("message.txt",message,(err)=>{
                if(err){
                    console.log(err);
                    
                }
                console.log("indise fs.writeFile");
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
          });
       
    }
    else{   
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page on NodeJS</title></head>');
    res.write('<body><h1>Hello from NodeJS Server !!!</h1></body>');
    res.write('</html>');
    res.end();
    }
}; 

module.exports=requestHandler;
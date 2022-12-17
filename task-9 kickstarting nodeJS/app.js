const http = require('http');

const express= require('express');

const app=express(); 
// const routes = require('./routes');

// console.log(routes.someText);

app.use((req,res,next)=>{
   console.log('In the Middleware!!!');
   next();
});

app.use((req,res,next)=>{
    console.log('In the another Middleware!!!');
    res.send('<h1>Hello Abhishek</h1>');
 });
const server = http.createServer(app);

server.listen(3000);

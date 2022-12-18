const http = require('http');

const express= require('express');

const bodyParser=require('body-parser');
const app=express(); 
// const routes = require('./routes');

// console.log(routes.someText);
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
   console.log('This always runs!!!');
   next();
});

app.use('/add-product',(req,res,next)=>{
   console.log('In the Middleware!!!');
   res.send('<form action="/product" method="POST"><label>Add Product Name</label><input type="text" name="title"><br><label>Add size</label><input type="text" name="title"><button type="submit">Add Product</button></form>');
});


app.post('/product',(req,res,next)=>{
   console.log(req.body);

   res.redirect('/');
});

app.use('/',(req,res,next)=>{
    console.log('In the another Middleware!!!');
    res.send('<h1>Hello Abhishek</h1>');
 });


const server = http.createServer(app);

server.listen(3000);

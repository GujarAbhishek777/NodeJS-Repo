const express=require('express');

const router=express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
  });

  router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    
    res.redirect('/');
  });

module.exports=router;
const express = require('express');
const router = express.Router();
const axios = require('axios');
const cache = require("./cache.json");

router.get('/',(req,res)=>{

    res.json({email:"a@yield.com",uid:"qwerty"});

})

router.post("/sendmail", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+"email")
   const errors = {};
    axios.post(cache.ip.email+cache.server.email.sendmail, req.body )
        .then((Response) => {
            
            console.log("sucess");
          return res.json(Response.data);       
        })
        .catch(error => {
          console.log(error);
          errors.data="Unable to Email"
          return res.status(400).json(errors);
        });
  }
);


module.exports=router;
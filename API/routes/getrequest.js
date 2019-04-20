const express = require('express');
const router = express.Router();
const axios = require('axios');
const cache = require("./cache.json");

router.get('/',(req,res)=>{

    res.json({email:"a@yield.com",uid:"qwerty"});

})

router.get("/getrequests", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+"all requets")
   const errors = {};
    console.log(cache.ip.getrequests+cache.server.getrequest.requetederides )   
    axios.get(cache.ip.getrequests+cache.server.getrequest.requetederides )
        .then((Response) => {
            console.log("sucess");
          return res.json(Response.data);       
        })
        .catch(error => {
          console.log(error);
          errors.data="Unable to get rides"
          return res.status(400).json(errors);
        });
  }
);

router.post("/login", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+"login")
   const errors = {};
    axios.post(cache.ip.auth+cache.server.auth.login, req.body )
        .then((Response) => {
            console.log("sucess");
          return res.json(Response.data);       
        })
        .catch(error => {
          console.log(error);
          errors.data="Unable to register"
          return res.status(400).json(errors);
        });
  }
);

module.exports=router;
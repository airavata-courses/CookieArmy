const express = require('express');
const router = express.Router();
const axios = require('axios');
const cache = require("./cache.json");

const ip='http://149.165.170.252:7998';

router.get('/',(req,res)=>{

    res.json({email:"a@yield.com",uid:"qwerty"});

})

router.post("/new-user", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+"new")
   const errors = {};
    axios.post(cache.ip.auth+cache.server.auth.newuser, req.body )
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
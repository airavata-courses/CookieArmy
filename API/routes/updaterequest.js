const express = require('express');
const router = express.Router();
const axios = require('axios');
const cache = require("./cache.json");

router.get('/',(req,res)=>{

    res.json({email:"a@yield.com",uid:"qwerty"});

})

router.post("/bookride", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+"all rides")
   const errors = {};
    axios.post(cache.ip.updateride+cache.server.updateride.bookride, req.body )
        .then((Response) => {
            console.log("sucess booked ride");
          return res.json(Response.data);       
        })
        .catch(error => {
          //console.log(error);
          errors.data="Unable to bookt rides"
          return res.status(400).json(errors);
        });
  }
);

router.post("/add", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+" radd")
   const errors = {};
   console.log(cache.ip.updaterequets+cache.server.updaterequest.add)
    axios.post(cache.ip.updaterequets+cache.server.updaterequest.add, req.body )
        .then((Response) => {
            console.log("sucess");
          return res.json(Response.data);       
        })
        .catch(error => {
          //console.log(error);
          errors.data="Unable to add"
          return res.status(400).json(errors);
        });
  }
);
router.post("/request", (req, res) => {
    //format:{ password: 'hey', name: 'gatture1t', email: 'a123@y1213.com' }
    console.log(req.body);
    console.log("gattu"+" "+"request")
   const errors = {};
    axios.post(cache.ip.updateride+cache.server.updateride.request, req.body )
        .then((Response) => {
            console.log("sucess");
          return res.json(Response.data);       
        })
        .catch(error => {
          //console.log(error);
          errors.data="Unable to add"
          return res.status(400).json(errors);
        });
  }
);
module.exports=router;
const http = require('http');
const path = require('path');

const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const app=express();

var cors = require('cors')
app.use(cors())
app.use(bodyparser.json());
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.use('/auth',(req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

const auth = require('./routes/auth')
app.use('/auth',auth);

app.get('/',(req,res)=>{
    res.send('home');
})

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send("Empty");
})
app.get('/example1',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send("Empty");
})
app.listen(5000,()=>console.log("Server Started on Port:5000"))
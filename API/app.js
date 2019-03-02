//const express = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
var cors = require('cors')
app.use(cors())
//View Enginer setup
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

// Static folder
//app.use('/public', express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
 //   res.send('Hello');
  
    //   res.render('contact');

});



app.get('/ish',(req,res)=>{
  var is;
  is="don"
  if(is=="done")
      res.send('true');
  else
      res.send('false');    
  //   res.render('contact');

});




app.listen(3000, () => console.log('Server started 3000.....'));

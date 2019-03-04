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
    res.send('Hello, Welcome to CookieArmy Email Service');
    //res.send('Hello');
    //   res.render('contact');

});

app.post('/send',(req,res) =>{
    console.log(req.body);
    const output = `
    <p>Your request has been accepted </p>
    <h3> Contact Details </h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;
    
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'sgaspring2019@gmail.com',
               pass: '123abc12'
           }
           ,
        tls:{
            rejectUnauthorized:false
        }
       });
       
       const mailOptions = {
        from: 'sgaspring2019@gmail.com', // sender address
        to:req.body.email ,// list of receivers
        subject: 'BooKing Confirmation!', //line
        html: output // plain text body
      };
      
      
      
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
    console.log('Message sent: %s', info,messgaeId);
    console.log('Previw URL: %s',nodemailer.getTestMessageUrl(info));

    res.render('contact',{msg:'Email has been sent'});
    });

});

app.listen(3000, () => console.log('Server started 3000.....'));

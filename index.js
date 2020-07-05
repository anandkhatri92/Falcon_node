const express = require('express');
const app     = express();
const helmet  = require('helmet');
const config  = require('config');  
const courses_module = require('./routes/courses');


// console.log(app.get(`env`));

//getting data from config based on environmrnt
console.log('Application Name :' +config.get('name'));

//getting dynamic value from console into file
console.log('Mail pwd: '+config.get('mail_pwd.password'));


app.use('/api/courses',courses_module);
//for getting req body data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

app.listen(3000, () => console.log('Listing to 3000'));
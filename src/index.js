const express = require('express')
const { PORT, Url_db_connect } = require('./config/server.config');
const bodyParser=require('body-parser');
const apirouter = require('./routes');

const errorhandler = require('./utils/ErrorHandler');
const connectToDb = require('./config/Db.condig');
const {  mongoose } = require('mongoose');

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use('/api',apirouter)
app.get('/home', (req,res)=>{ 
    return res.json( {
    message:'hey there your server is live'
})})

// last middleware if any error comes
app.use(errorhandler);


app.listen(PORT, async()=>{
    console.log('server started at :',PORT);
    await connectToDb();
    console.log("successful connected to db");
   
})
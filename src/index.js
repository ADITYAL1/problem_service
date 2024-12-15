const express = require('express')
const { PORT } = require('./config/server.config');
const bodyParser=require('body-parser');
const apirouter = require('./routes');

const errorhandler = require('./utils/ErrorHandler');

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
app.use(errorhandler)


app.listen(PORT,()=>{
    console.log('server started at :',PORT);


    
})
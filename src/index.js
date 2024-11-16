const express = require('express')
const { PORT } = require('./config/server.config');
const bodyParser=require('body-parser');
const apirouter = require('./routes');

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use('/api',apirouter)
app.get('/home', (req,res)=>{ 
    return res.json( {
    message:'hey there your server is live'
})})
app.listen(PORT,()=>{
    console.log('server started at :',PORT);
})
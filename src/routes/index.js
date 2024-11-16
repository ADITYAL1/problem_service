const express =require ('express')

const { pingcheck } = require('../controllers/problem.controller');
const problems = require('./v1/index');
const apirouter=express.Router()
 
apirouter.use('/v1',problems);

module.exports=apirouter;
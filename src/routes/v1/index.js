const express = require('express');
const Route = require('./problem.route');
const { pingcheck } = require('../../controllers/problem.controller');

const problems=express.Router();
problems.use('/problem',Route)
module.exports=problems;
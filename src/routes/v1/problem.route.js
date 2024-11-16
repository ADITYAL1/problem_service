const express=require('express')
const {problemcontroller}=require('../../controllers')
const Route=express.Router();
Route.get('/ping',problemcontroller.pingcheck)
Route.get('/:id',problemcontroller.getproblem);
Route.get('/',problemcontroller.getproblems);
Route.post('/',problemcontroller.addProblem);
Route.delete('/:id',problemcontroller.deleteproblem);
Route.put('/:id',problemcontroller.updateproblem);

module.exports=Route;
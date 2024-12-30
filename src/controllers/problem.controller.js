const { StatusCodes } = require("http-status-codes");
const BadRequest = require("../error/BadRequest");
const NotImplemented = require("../error/NotImplemented.error");
const { ProblemRepository } = require("../Repositories");
const { Problemservice } = require("../Services");
const problemService = new Problemservice(new ProblemRepository());
function pingcheck(req ,res){
    return res.json({
        message:"hi there its quick ping check"
    })
}

async function addProblem(req,res,next){
try { 
 
    const newProblem= await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
        success:true,
        message:"successfully created new problem",
        error:{},
        data:newProblem
    })
    
}catch(err){
    console.log("error")
    next(err);
}
}
function getproblem(req,res){
    try {
        throw new BadRequest("not accesible")
    }catch(err){
        next(err);
    }
}
function getproblems(req,res,next){
    try {
        throw new BadRequest("not accesible")
    }catch(err){
        next(err);
    }
}
function deleteproblem(req , res){
    return res.status(501).json({
        message:"Not implemented"
    })
}
function updateproblem(req,res){
    return res.status(501).json({
        message:"Not implemented"
    })
}
module.exports={

    addProblem,
    getproblem,
    getproblems,
    deleteproblem,
    updateproblem,
    pingcheck
    
}
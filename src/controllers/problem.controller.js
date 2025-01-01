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
 async function getproblem(req,res,next){
    try {
       const response = await problemService.getproblems(req.params.id);
       return   res.status(StatusCodes.OK).json({
        success:true,
        message:"successfully fetched your problem",
        error:{},
        data:response,
    })
    }catch(err){
        next(err);
    }
}
 async function getproblems(req,res,next){
    try {
        const response=await problemService.getallproblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"successfully fetched all problems",
            error:{},
            data:response,
        })
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
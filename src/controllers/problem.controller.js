const BadRequest = require("../error/BadRequest");
const NotImplemented = require("../error/NotImplemented.error")

function pingcheck(req ,res){
    return res.json({
        message:"hi there its quick ping check"
    })
}

function addProblem(req,res,next){
try {
    throw new NotImplemented("addProblem")
}catch(err){
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
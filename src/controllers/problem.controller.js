
function pingcheck(req ,res){
    return res.json({
        message:"hi there its quick ping check"
    })
}

function addProblem(req,res){
return res.status(501).json({
    message:"Not implemented",ad
})
}
function getproblem(req,res){
return res.json({
    mesg:'you are inside get problems'
})
}
function getproblems(req,res){
    return res.status(501).json({
        message:"Not implemented"
    })
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

function pingcheck(req ,res){
    return res.json({
        message:"hi there its quick ping check"
    })
}

function addProblem(req,res){

}
function getproblem(req,res){
return res.json({
    mesg:'you are inside get problems'
})
}
function getproblems(req,res){

}
function deleteproblem(req , res){

}
function updateproblem(req,res){

}
module.exports={
    addProblem,
    getproblem,
    getproblems,
    deleteproblem,
    updateproblem,
    pingcheck
}
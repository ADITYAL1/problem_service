const { StatusCodes } = require("http-status-codes");
const BaseError = require("../error/BaseError");

function errorhandler(err,req, res, next){
    if (err instanceof BaseError){
        return res.status(err.statuscode).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{}
        
        })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"something went wrong",
        error:err,
        data:{}
    
    })
}
module.exports= errorhandler;
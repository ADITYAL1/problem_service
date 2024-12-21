const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class InernalServerError extends BaseError{
    constructor(details){
        super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR,"Server Error",details)
    }
}
module.exports=InernalServerError;
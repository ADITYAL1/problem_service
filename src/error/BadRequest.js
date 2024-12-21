const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class BadRequest extends BaseError{
    constructor(PropertyName){
       super("badRequest", StatusCodes.BAD_REQUEST, `invalid structure for ${PropertyName} provided`,{})
    }

}
module.exports=BadRequest;
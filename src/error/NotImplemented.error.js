const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotImplemented extends BaseError {
  constructor(details){
    super("NotImplemented",StatusCodes.NOT_IMPLEMENTED,`${details} service is not implemented ` ,{} )
  }
}
module.exports=NotImplemented;
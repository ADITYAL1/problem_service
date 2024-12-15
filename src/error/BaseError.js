class BaseError extends Error{
    constructor(name,statuscode,desciption,details){
        super(desciption)
        this.name=name;
        this.statuscode=statuscode;
        this.details=details;
    }
}
module.exports =BaseError;
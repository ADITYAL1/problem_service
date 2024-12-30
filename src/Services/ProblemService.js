
const SanitizeMark = require("../utils/MarkedSanitizer");

class Problemservice {
    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }

    async createProblem(problemdata){
     try{
        console.log(problemdata);
        problemdata.description=SanitizeMark(problemdata.description)
        console.log('check completed')
      const problem= await this.problemRepository.CreateProblem(problemdata);
          console.log(problem);
      return problem;
     }catch(err){
    console.log(err);
    throw err;
     }
    }
      
}
module.exports=Problemservice;
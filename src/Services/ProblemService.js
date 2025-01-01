
const SanitizeMark = require("../utils/MarkedSanitizer");

class Problemservice {
    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }

    async createProblem(problemdata){
     try{
       
        problemdata.description=SanitizeMark(problemdata.description)
      
        const problem= await this.problemRepository.CreateProblem(problemdata);
         
      return problem;
     }
     catch(err)
     {
     
       throw err;
     }
    }
      async getallproblems(){
        try {
          const problems =await this.problemRepository.GetAllProblems();
          return problems;
        } catch (error) {
          throw error;
        }
      }

      async getproblems(id){
        try {
         
          const problem =await this.problemRepository.GetProblem(id);
        
          return problem;
        } catch (error) {
          throw error;
        }
      } 
}
module.exports=Problemservice;
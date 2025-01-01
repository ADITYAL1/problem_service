const problem = require("../models/problem.model");



class ProblemRepository {
    async CreateProblem(Problemdata){
        try{ 
          
            const adi = problem.create({
                title:Problemdata.title,
                description:Problemdata.description,
                testcases:(Problemdata.testcases)?Problemdata.testcases:[],
            })
           
           return adi
        }catch(err){
          console.log(err);
          throw err;
        }
    }
   async GetAllProblems(){
    try {
       
       const problems= await problem.find({});
       return problems;
    }catch(err){
    
        throw err;
    }
 }
    async GetProblem(id){
        try {
            const problem1=await problem.findById(id);
            return problem1;
        } catch (error) {
            console.log(err);
            throw err;
        }
    }





}
module.exports=ProblemRepository;
const problem = require("../models/problem.model");


class ProblemRepository {
    async CreateProblem(Problemdata){
        try{ 
            console.log("problem creating");
            const adi = problem.create({
                title:Problemdata.title,
                description:Problemdata.description,
                testcases:(Problemdata.testcases)?Problemdata.testcases:[],
            })
            console.log("problem created");
           return adi
        }catch(err){
          console.log(err);
          throw err;
        }
    }
}
module.exports=ProblemRepository;
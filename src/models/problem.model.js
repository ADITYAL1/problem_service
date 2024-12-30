const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title:{
    type: String,
    required:[true, "Tittle cannot be empty"]

  },
   description:{
      type:String,
      required:[true, "description can not be empty"],
   },
   difficulty:{
    type : String,
    enum:['easy','medium','hard'],
    required:[true,"difficulty cannot be empty"],
    default:'easy',

   },
   testcases:[
    {
        input:{
            type:String,
            required:[true,"cannot be empty"]
        },
        output:{
            type:String,
            required:[true, "cannot be empty"],
        }
    }
   ],
   editorial:{
    type:String,
   }

});

const problem = mongoose.model('problem',problemSchema);
module.exports=problem;
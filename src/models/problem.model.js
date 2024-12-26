const mongoose = require('mongoose');

const problem = new mongoose.Schema({
  title:{
    type: String,
    required:[true, "Tittle cannot be empty"]

  },
   description:{
      type:String,
      required:[true, "description can not be empt"]
   }

});
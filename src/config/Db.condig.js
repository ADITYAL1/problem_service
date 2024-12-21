const mongoose=require('mongoose');
const { Url_db_connect } = require('./server.config');
  
 async function connectToDb (){
try {
    await mongoose.connect(Url_db_connect)
}catch(err){
    console.log('unable to connect to the database',err);
}
}
   module.exports=connectToDb;
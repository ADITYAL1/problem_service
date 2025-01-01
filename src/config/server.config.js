const dotenv=require('dotenv');
dotenv.config();
module.exports={
    PORT:process.env.PORT ||3000,
    Url_db_connect:process.env.Url_db_connect,
}


// password=> WP2NF3LuPbwykqBN   username =>singhanshu9724     7CChV8mlJMoIFahF
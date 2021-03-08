const mongoose = require('mongoose');
const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.databaseConnection, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify : false
        });
        console.log('Database is already connected');
    }catch(err){
        console.log(err);
        throw new Error('Error in the time to initialize the database');
    }
}

module.exports = {
    dbConnection,
    //connection
    
}
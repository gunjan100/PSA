const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI


const DbConnection = ()=>{
    try {
        
        mongoose.connect(URI)
        console.log("Connected to MongoDB");
    } catch (error) {

        console.error("Error connecting to MongoDB:", error.message);
        
    }

}

module.exports = DbConnection;
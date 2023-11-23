const mongoose = require('mongoose')

function DatabaseConnection() {
    mongoose.connect(process.env.DB_URL).then(() =>{
        console.log("Database Connection Complete")
    });
}

module.exports = DatabaseConnection;
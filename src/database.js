const mongoose = require("mongoose");
// MODELS go here




// Connect to the database 
async function connect(databaseURL){
	console.log("Database connecting to " + databaseURL);
	await mongoose.connect(databaseURL);
	console.log("Database connected!");
}

module.exports = {
    connect
}
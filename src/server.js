// Create server and endpoints

const express = require("express");

const app = express();

app.use(express.json());

const mongoose = require("mongoose");

// Define URL
let databaseUrl = "mongodb://localhost:27017/BookTracker";

// Connect to URL
const { connect } = require("./database.js");
connect(databaseUrl)

// Global operations
app.get("/", (request, response) => {
    response.send(
          "<h1>Book Tracking App</h1>"
        + "<p>The purpose of the app is to keep track of the books you have read and leave your own review for yourself or others.</p>"
        + "<p>May also include a book wishlist.</p>"
    )
})

// Router imports
const {BookRouter} = require("./controllers/BookController.js");
app.use("/books", BookRouter)


// Wildcard
app.get("*", (request, response) => {
    console.log("User attempted to visit " + request.path);
    response.send("<h2>Error 404: Page not found</h2>" + `<p>Attempted path: ${request.path}</p>`)
}
)


// Error handler must be last
app.use((error, request, response, next) => {
    console.log("Error occured in the server.");
    console.log(JSON.stringify(error));
    response.json({
        message: error.message
    });
});

module.exports = {
    app
}
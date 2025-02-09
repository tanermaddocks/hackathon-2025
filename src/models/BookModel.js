const mongoose = require("mongoose");

// Make a schema
const BookSchema = new mongoose.Schema({
    title: String,
    fiction: Boolean,
    genres: [String],
    author: String,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
});

// Make a model
const BookModel = mongoose.model("Book", BookSchema);

//Export
module.exports = {
    BookModel
}
const express = require("express");
const { BookModel } = require("../models/BookModel");
const router = express.Router();

// get all books - localhost:8200/books/all
router.get(
    "/all",
    async (request, response) => {
        const book = await BookModel.find();
        response.json(book);
    }
)

// get one books - localhost:8200/books/:bookid
router.get(
    "/one/:bookId",
    async (request, response) => {
        const book = await BookModel.findById(request.params.bookId);
        response.json(book);
    }
)

router.post(
    "/",
    async (request, response) => {
        const bodyData = {
            title: request.body.title,
            fiction: request.body.fiction,
            genres: request.body.genres,
            author: request.body.author,
            rating: request.body.rating
        }
        const newBook = await BookModel.create(bodyData)
        response.status(201).json(newBook)
    }
)

router.delete(
    "/delete/:bookId",
    async (request, response) => {
        const deletedBook = await BookModel.findByIdAndDelete(request.params.bookId)
        if (deletedBook) {
            response.json(deletedBook)
            console.log("Book deleted")
        } else {
            response.status(404).json({ error: "Did not find book."})
        }
    }
)




module.exports = {
    BookRouter: router
}
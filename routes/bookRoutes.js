const { fetchBooks, addBooks, deleteBooks, updateBooks, fetchSingleBook } = require("../controllers/book.controller")

const router = require("express").Router()

router.route("/books" ).get(fetchBooks).post(addBooks)
router.route("/books/:id").delete(deleteBooks).patch(updateBooks).get(fetchSingleBook)

module.exports = router
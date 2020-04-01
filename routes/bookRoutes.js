const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// router.route("/test").get((req, res) => {
//   res.send("IT works");
// });
router.route("/addBook").post(bookController.addBook);

router.route("/updateBook").put(bookController.updateBook);


router.route("/books_query").get(bookController.getBook); //GET BOOKS BY NAME

router.route("/books/:id").get(bookController.getBookById);

router.route("/books/getBooks").get(bookController.getBooks); //GET ALL BOOKS

module.exports = router;

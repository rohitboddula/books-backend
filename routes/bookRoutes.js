const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.route("/test").get((req, res) => {
  res.send("IT works");
});
router.route("/").post(bookController.addBook);

// router.route("/books_query").post(bookController.getBook);

// router.route("/books/:id").put(bookController.updateProfile);

module.exports = router;

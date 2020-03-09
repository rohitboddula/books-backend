const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
});

const Book = mongoose.model("book", bookSchema);

module.exports = { Book };

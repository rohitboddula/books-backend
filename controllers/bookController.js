const { Book } = require("../models/Book");

exports.addBook = async (req, res) => {
  try {
    const { title, author, publisher, category, price } = req.body;
    const books = await new Book({
      title,
      author,
      publisher,
      category,
      price
    }).save();
    res.status(201).json({
      books,
      message: "Searched Books Successful!"
    });
  } catch (error) { 
    res.status(500).json({
      message: "Internal Server Error"
    });
    console.log(error);
  }
};

exports.getBook = async (req, res) => {
  try {
    const { title } = req.body;
    const book = await Book.findOne({ title });
    if (book) {
      res.status(200).json({
        book
      });
    } else {
      res.status(404).json({
        message: "Book not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
    console.log(error);
  }
};

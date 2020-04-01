const { Book } = require("../models/Book");

// ADMIN USE
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
      message: " Book Added Successful!"
    });
    error;
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const entries = Object.keys(req.body);
  const updates = {};
  for (let i = 0; i < entries.length; i++) {
    updates[entries[i]] = Object.values(req.body)[i];
  }
  Book.update(
    {
      _id: id
    },
    {
      $set: updates
    },
    (err, success) => {
      if (err) {
        handleError(err, res);
        return;
      } else {
        res.status(200).json({
          message: "Book Details Updated Successfully"
        });
      }
    }
  );
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (blog) {
      res.status(200).json({
        message: "Book deleted successfully"
      });
    } else {
      res.status(404).json({
        message: "Book not found"
      });
    }
  } catch (error) {
    handleError(error, res);
  }
};

//BOTH USER AND ADMIN
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

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
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
    handleError(error, res);
  }
};  

exports.getBooks = async (req, res) => {
  try {
    const { title } = req.query;
    const book = await Book.find({ title });
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

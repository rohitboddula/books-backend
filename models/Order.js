const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  book_id: [{ type: mongoose.Schema.ObjectId, ref: "book" }],
  user_id: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: { type: Date },
  total: { type: Number }
});

const Order = mongoose.model("order", orderSchema);

module.exports = { Order };

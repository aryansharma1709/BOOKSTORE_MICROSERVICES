const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  books: [String], // Book IDs
  totalAmount: Number,
  orderedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);

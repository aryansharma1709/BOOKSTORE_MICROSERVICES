const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const verifyToken = require("../middleware/authMiddleware");

// Place a new order
router.post("/", verifyToken, async (req, res) => {
  const { books, totalAmount } = req.body;
  try {
    const order = new Order({
      userId: req.user.id,
      books,
      totalAmount
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get logged-in user's orders
router.get("/user", verifyToken, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
});

// Get all orders (admin/testing)
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;

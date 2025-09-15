const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add new product
router.post("/", async (req, res) => {
  try {
    const { name, price, image, category } = req.body;

    if (!name || !price || !image || !category) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const product = new Product({ name, price, image, category });
    await product.save();

    res.status(201).json({ msg: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products" });
  }
});

module.exports = router;

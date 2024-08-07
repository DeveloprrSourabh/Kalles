const express = require("express");
const formidable = require("express-formidable");
const {
  addCartController,
  updateCartController,
  deleteCartController,
  getCartController,
} = require("../controllers/cartController");

const router = express.Router();

// Add Product To Cart
router.post("/add-to-cart/:id", addCartController);

// Update Cart Product
router.put("/update-to-cart/:id", updateCartController);

// Delete Cart Product
router.delete("/delete-to-cart/:id", deleteCartController);

// Get All Products
router.get("/get-cart-products/:id", getCartController);

module.exports = router;

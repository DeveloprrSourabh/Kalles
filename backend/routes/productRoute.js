const express = require("express");
const {
  addproductController,
  updateproductController,
  getAllProductController,
  deleteProductController,
  getSingleProductController,
  getProductPhotoController,
  topProductController,
} = require("../controllers/productContoller");
const formidable = require("express-formidable");

const router = express.Router();

// Add Product
router.post("/add-product", formidable(), addproductController);

// Update Product
router.put("/update-product/:slug", formidable(), updateproductController);

// Get All Products
router.get("/all-products", getAllProductController);

// DELETE PRODUCT
router.delete("/delete-product/:id", deleteProductController);

// GET SINGLE PRODUCT
router.get("/get-product/:slug", getSingleProductController);

// PRODUCT PHOTO
router.get("/product-photo/:slug", getProductPhotoController);

// TOP 6 PRODUCTS|| METHOD GET
router.get("/top-product", topProductController);

module.exports = router;

const express = require("express");
const { addproductController } = require("../controllers/productContoller");
const formidable = require("express-formidable");

const router = express.Router();

router.post("/add-product", formidable(), addproductController);

module.exports = router;

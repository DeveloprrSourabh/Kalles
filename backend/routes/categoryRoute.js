const express = require("express");
const formidable = require("express-formidable");
const {
  getSingleCategoryController,
  addcategoryController,
  updateCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getCategoryPhotoController,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/add-category", formidable(), addcategoryController);

// UPDATE CATEGORY || METHOD PUT
router.put("/update-category/:slug", formidable(), updateCategoryController);

// DELETE CATEGORY || METHOD DELETE
router.delete("/delete-category/:id", deleteCategoryController);

// GET ALL CATEGORY || METHOD GET
router.get("/all-categories", getAllCategoryController);

// GET SINGLE CATEGORY || METHOD GET
router.get("/get-category/:id", getSingleCategoryController);

// Category PHOTO
router.get("/category-photo/:id", getCategoryPhotoController);

module.exports = router;

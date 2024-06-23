const express = require("express");
const formidable = require("express-formidable");
const {
  addBlogCategoryController,
  updateBlogCategoryController,
  deleteBlogCategoryController,
  getAllBlogCategoryController,
  getSingleBlogCategoryController,
  getBlogCategoryPhotoController,
} = require("../controllers/blogCategoryController");

const router = express.Router();

router.post("/add-blog-category", formidable(), addBlogCategoryController);

// UPDATE CATEGORY || METHOD PUT
router.put(
  "/update-blog-category/:id",
  formidable(),
  updateBlogCategoryController
);

// DELETE CATEGORY || METHOD DELETE
router.delete("/delete-blog-category/:id", deleteBlogCategoryController);

// GET ALL CATEGORY || METHOD GET
router.get("/all-blog-categories", getAllBlogCategoryController);

// GET SINGLE CATEGORY || METHOD GET
router.get("/get-blog-category/:id", getSingleBlogCategoryController);

// Category PHOTO
router.get("/blog-category-photo/:id", getBlogCategoryPhotoController);

module.exports = router;

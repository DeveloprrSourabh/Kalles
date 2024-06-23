const express = require("express");

const formidable = require("express-formidable");
const {
  addBlogController,
  updateBlogController,
  getAllBlogController,
  deleteBlogController,
  getSingleBlogController,
  getSingleBlogViewController,
  getBlogPhotoController,
  topBlogController,
} = require("../controllers/blogController");

const router = express.Router();

// Add BLOG
router.post("/add-blog", formidable(), addBlogController);

// Update BLOG
router.put("/update-blog/:slug", formidable(), updateBlogController);

// Get All BLOGS
router.get("/all-blogs", getAllBlogController);

// DELETE BLOG
router.delete("/delete-blog/:id", deleteBlogController);

// GET SINGLE BLOG
router.get("/get-blog/:slug", getSingleBlogController);
router.get("/get-blogview/:slug", getSingleBlogViewController);

// BLOG PHOTO
router.get("/blog-photo/:slug", getBlogPhotoController);

// TOP 6 BLOGS|| METHOD GET
router.get("/top-blog", topBlogController);

module.exports = router;

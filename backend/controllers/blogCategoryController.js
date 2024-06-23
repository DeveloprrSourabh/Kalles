const mongoose = require("mongoose");
const BlogCategory = require("../models/blogCategoryModel");
const { default: slugify } = require("slugify");
const fs = require("fs");

exports.addBlogCategoryController = async (req, res) => {
  try {
    const { name, slug } = await req.fields;
    const { photo } = req.files;
    // Check Existing Category
    const existsCategory = await BlogCategory.findOne({ name });
    if (existsCategory) {
      return res
        .status(400)
        .send({ success: false, message: "Category Already Eixsts" });
    }
    // Check Validation
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    let category = await new BlogCategory({
      ...req.fields,
      slug: slugify(name),
    });
    if (photo) {
      category.photo.data = fs.readFileSync(photo.path);
      category.photo.contentType = photo.type;
    }

    await category.save();
    return res.status(200).send({
      success: true,
      message: "Category Added Successfully",
      // category,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Category",
    });
  }
};

// Update Category
exports.updateBlogCategoryController = async (req, res) => {
  try {
    const { name } = req.fields;
    const { photo } = req.files;
    const { id } = req.params;
    if (!name) {
      return res.status(400).send({ message: "category is Required" });
    }
    let category = await BlogCategory.findById(id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "No Category Found",
      });
    }
    category = await BlogCategory.findByIdAndUpdate(
      category._id,
      {
        ...req.fields,
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      category.photo.data = fs.readFileSync(photo.path);
      category.photo.contentType = photo.type;
    }
    await category.save();
    return res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating  category",
      error,
    });
  }
};

// Delete Category
exports.deleteBlogCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const existsCategory = await BlogCategory.findById(id);
    if (!existsCategory) {
      return res.status(404).send({
        success: false,
        message: "No Category Found",
      });
    }
    const category = await BlogCategory.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting  category",
      error,
    });
  }
};

// Get All Category Controller
exports.getAllBlogCategoryController = async (req, res) => {
  try {
    const categories = await BlogCategory.find({}).select("-photo");
    return res.status(200).send({
      success: true,
      message: "Get all Category Successfully",
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Gtting All Category",
      error,
    });
  }
};

// Get Single Category
exports.getSingleBlogCategoryController = async (req, res) => {
  try {
    const category = await BlogCategory.findById(req.params.id).select(
      "-photo"
    );
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "Category Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Category",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Category",
      error,
    });
  }
};

// Get Blog Category Photo
exports.getBlogCategoryPhotoController = async (req, res) => {
  try {
    let category = await BlogCategory.findById(req.params.id).select("photo");
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "Category Not Found",
      });
    }
    if (category.photo.data) {
      res.set("Content-type", category.photo.contentType);
      return res.status(200).send(category.photo.data);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Category Photo",
      error,
    });
  }
};

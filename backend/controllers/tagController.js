const mongoose = require("mongoose");
const Tag = require("../models/tagModel");
const { default: slugify } = require("slugify");
const tagModel = require("../models/tagModel");

// Add Tag
exports.addTagController = async (req, res) => {
  try {
    const { name, slug } = await req.body;
    // Check Existing product
    const existsTag = await Tag.findOne({ name });
    if (existsTag) {
      return res
        .status(400)
        .send({ success: false, message: "Tag Already Eixsts" });
    }
    // Check Validation
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    let tag = await new Tag({
      name,
      slug: slugify(name),
    });

    await tag.save();
    return res.status(200).send({
      success: true,
      message: "Tag Added Successfully",
      tag,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Tag",
    });
  }
};

// Update Tag
exports.updateTagController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    if (!name) {
      return res.status(400).send({ message: "Tag is Required" });
    }
    let tag = await Tag.findById(id);
    if (!tag) {
      return res.status(404).send({
        success: false,
        message: "No Tag Found",
      });
    }
    tag = await Tag.findByIdAndUpdate(
      tag._id,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    await tag.save();
    return res.status(200).send({
      success: true,
      message: "Tag Updated Successfully",
      tag,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating  Tag",
      error,
    });
  }
};

// Delete Tag
exports.deleteTagController = async (req, res) => {
  try {
    const { id } = req.params;
    const existsTag = await Tag.findById(id);
    if (!existsTag) {
      return res.status(404).send({
        success: false,
        message: "No Category Found",
      });
    }
    const tag = await Tag.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Tag Deleted Successfully",
      tag,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting  Tag",
      error,
    });
  }
};

// Get All Tag Controller
exports.getAllTagController = async (req, res) => {
  try {
    const tags = await Tag.find({});
    return res.status(200).send({
      success: true,
      message: "Get all Tags Successfully",
      tags,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Gtting All Tags",
      error,
    });
  }
};

// Get Single Tag
exports.getSingleTagController = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) {
      return res.status(400).send({
        success: false,
        message: "Tag Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Tag",
      tag,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Tag",
      error,
    });
  }
};

const mongoose = require("mongoose");
const Color = require("../models/colorModel");
const { default: slugify } = require("slugify");

// Add Color
exports.addColorController = async (req, res) => {
  try {
    const { name, slug } = await req.body;
    // Check Existing Color
    const existsColor = await Color.findOne({ name });
    if (existsColor) {
      return res
        .status(400)
        .send({ success: false, message: "Color Already Eixsts" });
    }
    // Check Validation
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    let color = await new Color({
      name,
      slug: slugify(name),
    });

    await color.save();
    return res.status(200).send({
      success: true,
      message: "Color Added Successfully",
      color,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Color",
    });
  }
};

// Update Color
exports.updateColorController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    if (!name) {
      return res.status(400).send({ message: "Color is Required" });
    }
    let color = await Color.findById(id);
    if (!color) {
      return res.status(404).send({
        success: false,
        message: "No Color Found",
      });
    }
    color = await Color.findByIdAndUpdate(
      color._id,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    await color.save();
    return res.status(200).send({
      success: true,
      message: "Color Updated Successfully",
      color,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating Color",
      error,
    });
  }
};

// Delete Color
exports.deleteColorController = async (req, res) => {
  try {
    const { id } = req.params;
    const existsColor = await Color.findById(id);
    if (!existsColor) {
      return res.status(404).send({
        success: false,
        message: "No Color Found",
      });
    }
    const color = await Color.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Color Deleted Successfully",
      color,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Color",
      error,
    });
  }
};

// Get All Color Controller
exports.getAllColorController = async (req, res) => {
  try {
    const colors = await Color.find({});
    return res.status(200).send({
      success: true,
      message: "Get all Colors Successfully",
      colors,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Gtting All Colors",
      error,
    });
  }
};

// Get Single Color
exports.getSingleColorController = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) {
      return res.status(400).send({
        success: false,
        message: "Color Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Color",
      color,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Color",
      error,
    });
  }
};

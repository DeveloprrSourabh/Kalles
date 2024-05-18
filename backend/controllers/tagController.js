const mongoose = require("mongoose");
const Tag = require("../models/tagModel");
const { default: slugify } = require("slugify");
const fs = require("fs");

exports.addtagController = async (req, res) => {
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
      // category,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Tag",
    });
  }
};

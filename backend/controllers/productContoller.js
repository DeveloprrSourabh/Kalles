const mongoose = require("mongoose");
const Product = require("../models/productModel");
const { default: slugify } = require("slugify");
const fs = require("fs");

exports.addproductController = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      quantity,
      category,
      color,
      size,
      tag,
      sku,
      detail,
      arrived,
      slug,
    } = await req.fields;
    const { photo } = req.files;

    let product = await new Product({
      ...req.fields,
      slug: slugify("req.fields.name"),
    });
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    return res.status(200).send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Product",
    });
  }
};

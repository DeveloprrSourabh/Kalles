const mongoose = require("mongoose");
const Cart = require("../models/cartModel");
const { default: slugify } = require("slugify");

// Add Product To Cart
exports.addCartController = async (req, res) => {
  try {
    const { count } = await req.body;
    const { id } = req.params;

    let cart = await new Cart({
      id,
      count,
    });

    await cart.save();
    return res.status(200).send({
      success: true,
      message: "Product Added To Cart",
      cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Product In Cart ",
    });
  }
};

// Update Product In Cart
exports.updateCartController = async (req, res) => {
  try {
    const { count } = await req.body;
    const { id } = req.params;
    let cart = await Cart.findOne({ id });
    cart = await Cart.findByIdAndUpdate(
      cart._id,
      {
        count: count,
      },
      { new: true }
    );

    await cart.save();
    return res.status(200).send({
      success: true,
      message: "Product Update In Cart",
      cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating Product In Cart ",
    });
  }
};

// Delete Product From Cart
exports.deleteCartController = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndDelete(id);

    return res.status(200).send({
      success: true,
      message: "Product Deleted In Cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Product In Cart ",
    });
  }
};

// Get Product From Cart
exports.getCartController = async (req, res) => {
  try {
    const carts = await Cart.find({});
    return res.status(200).send({
      success: true,
      message: "Get all Cart Product Successfully",
      carts,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting All Product Of Cart ",
    });
  }
};

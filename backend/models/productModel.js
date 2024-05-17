const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: [String],
    },
    tag: {
      type: [String],
      require: true,
    },
    sku: {
      type: String,
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    color: {
      type: [String],
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    arrived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);

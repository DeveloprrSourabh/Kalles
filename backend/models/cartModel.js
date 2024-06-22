const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    proId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    count: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);

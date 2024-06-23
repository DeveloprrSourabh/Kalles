const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
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

    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogCategory",
      },
    ],
    tag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],

    photo: {
      data: Buffer,
      contentType: String,
    },
    images: ["Strings"],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

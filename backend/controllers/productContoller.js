const mongoose = require("mongoose");
const Product = require("../models/productModel");
const { default: slugify } = require("slugify");
const fs = require("fs");
const formidable = require("formidable");

// Add Product
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

    const { photo, images } = req.files;

    // Check Existing product
    const existsProduct = await Product.findOne({ name });
    if (existsProduct) {
      return res
        .status(400)
        .send({ success: false, message: "Product Already Eixsts" });
    }
    const categoryArray = JSON.parse(category);
    const tagArray = JSON.parse(tag);
    const colorArray = JSON.parse(color);
    const sizeArray = JSON.parse(size);

    // Check Validation
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    if (!description) {
      return res.status(200).send({
        succes: false,
        message: "Description Is required",
      });
    }
    if (!quantity) {
      return res.status(200).send({
        succes: false,
        message: "Quantity Is required",
      });
    }
    if (!category) {
      return res.status(200).send({
        succes: false,
        message: "Category Is required",
      });
    }
    if (!color) {
      return res.status(200).send({
        succes: false,
        message: "Color Is required",
      });
    }
    if (!size) {
      return res.status(200).send({
        succes: false,
        message: "Size Is required",
      });
    }
    if (!tag) {
      return res.status(200).send({
        succes: false,
        message: "Tag Is required",
      });
    }
    if (!sku) {
      return res.status(200).send({
        succes: false,
        message: "Sku Is required",
      });
    }
    if (!detail) {
      return res.status(200).send({
        succes: false,
        message: "Detail Is required",
      });
    }
    if (!tag) {
      return res.status(200).send({
        succes: false,
        message: "Tag Is required",
      });
    }

    let product = await new Product({
      ...req.fields,
      category: categoryArray.map((id) => new mongoose.Types.ObjectId(id)),
      color: colorArray.map((id) => new mongoose.Types.ObjectId(id)),
      tag: tagArray.map((id) => new mongoose.Types.ObjectId(id)),
      size: sizeArray.map((e, i) => e),
      slug: slugify(name),
    });
    // Handle multiple images
    if (images && Array.isArray(images)) {
      console.log(images);
      product.images = images.map((img, index) => ({
        data: fs.readFileSync(img.path),
        contentType: img.type,
      }));
    } else if (images) {
      console.log(images);
      product.images = [
        {
          data: fs.readFileSync(images.path),
          contentType: images.type,
        },
      ];
    }
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    return res
      .status(200)
      .send({ success: true, message: "Product Added Successfully", product });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Product",
    });
  }
};

// Update Product
exports.updateproductController = async (req, res) => {
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
    const { proSlug } = req.params;

    const categoryArray = JSON.parse(category);
    const tagArray = JSON.parse(tag);
    const colorArray = JSON.parse(color);
    const sizeArray = JSON.parse(size);
    // Check Validation
    if (!name) {
      return res.status(200).send({
        succes: false,
        message: "Name Is required",
      });
    }
    if (!description) {
      return res.status(200).send({
        succes: false,
        message: "Description Is required",
      });
    }
    if (!quantity) {
      return res.status(200).send({
        succes: false,
        message: "Quantity Is required",
      });
    }
    if (!category) {
      return res.status(200).send({
        succes: false,
        message: "Category Is required",
      });
    }
    if (!color) {
      return res.status(200).send({
        succes: false,
        message: "Color Is required",
      });
    }
    if (!size) {
      return res.status(200).send({
        succes: false,
        message: "Size Is required",
      });
    }
    if (!tag) {
      return res.status(200).send({
        succes: false,
        message: "Tag Is required",
      });
    }
    if (!sku) {
      return res.status(200).send({
        succes: false,
        message: "Sku Is required",
      });
    }
    if (!detail) {
      return res.status(200).send({
        succes: false,
        message: "Detail Is required",
      });
    }
    if (!tag) {
      return res.status(200).send({
        succes: false,
        message: "Tag Is required",
      });
    }

    // Check product
    let product = await Product.findOne({ proSlug });
    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product Not Found",
      });
    }
    product = await Product.findByIdAndUpdate(
      product._id,
      {
        ...req.fields,
        category: categoryArray?.map((id) => new mongoose.Types.ObjectId(id)),
        color: colorArray?.map((id) => new mongoose.Types.ObjectId(id)),
        tag: tagArray?.map((id) => new mongoose.Types.ObjectId(id)),
        size: sizeArray?.map((e, i) => e),
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    return res.status(200).send({
      success: true,
      message: "Product Updated Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating Product",
    });
  }
};

// Get All Products
exports.getAllProductController = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .select("-photo");
    return res.status(200).send({
      success: true,
      message: "Getting All Products",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting All Products",
      error,
    });
  }
};

// Delete Product
exports.deleteProductController = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    // Check Product
    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product Not Found",
      });
    }
    product = await Product.findByIdAndDelete(product._id);
    return res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting product",
      error,
    });
  }
};
// Get Single Product For Update
exports.getSingleProductController = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate({
        path: "category",
        select: "_id",
      })
      .populate({
        path: "tag",
        select: "_id",
      })
      .populate({
        path: "color",
        select: "_id",
      })
      .select("-photo");
    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Product",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Product",
      error,
    });
  }
};
// Get Single Product For View
exports.getSingleProductViewController = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate("category")
      .populate("tag")
      .populate("color")
      .select("-photo");
    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Product",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Product",
      error,
    });
  }
};

// Get Product Photo
exports.getProductPhotoController = async (req, res) => {
  try {
    let product = await Product.findOne({ slug: req.params.slug }).select(
      "photo"
    );
    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product Not Found",
      });
    }
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Product Photo",
      error,
    });
  }
};

// Top Product
exports.topProductController = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(6);
    return res.status(200).send({
      success: true,
      message: "Getting Top Products",
      // products,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Top Products",
      error,
    });
  }
};

// Product Filter
exports.productFilterController = async (req, res) => {
  try {
    const { checked } = req.body;
    let args = {};

    if (checked?.length > 0) args.category = checked;
    // if (radio?.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const products = await Product.find({ category: { $in: checked } })
      // .populate("category")
      .select("-photo");
    res.status(200).send({
      success: true,
      message: "getting product by filter",
      products,
    });
    console.log(products);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: true,
      message: "Error While Filtering Product",
      error,
    });
  }
};

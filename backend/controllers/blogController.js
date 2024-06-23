const mongoose = require("mongoose");
const Blog = require("../models/blogModel");
const { default: slugify } = require("slugify");
const fs = require("fs");
const formidable = require("formidable");

// Add Blog
exports.addBlogController = async (req, res) => {
  try {
    const { name, description, category, tag, detail, slug } = await req.fields;

    const { photo, images } = req.files;

    // Check Existing Blog
    const existsBlog = await Blog.findOne({ name });
    if (existsBlog) {
      return res
        .status(400)
        .send({ success: false, message: "Blog Already Eixsts" });
    }
    const categoryArray = JSON.parse(category);
    const tagArray = JSON.parse(tag);

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

    if (!category) {
      return res.status(200).send({
        succes: false,
        message: "Category Is required",
      });
    }

    if (!tag) {
      return res.status(200).send({
        succes: false,
        message: "Tag Is required",
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

    let blog = await new Blog({
      ...req.fields,
      category: categoryArray.map((id) => new mongoose.Types.ObjectId(id)),
      tag: tagArray.map((id) => new mongoose.Types.ObjectId(id)),
      slug: slugify(name),
    });
    // Handle multiple images
    if (images && Array.isArray(images)) {
      console.log(images);
      blog.images = images.map((img, index) => ({
        data: fs.readFileSync(img.path),
        contentType: img.type,
      }));
    } else if (images) {
      console.log(images);
      blog.images = [
        {
          data: fs.readFileSync(images.path),
          contentType: images.type,
        },
      ];
    }
    if (photo) {
      blog.photo.data = fs.readFileSync(photo.path);
      blog.photo.contentType = photo.type;
    }

    await blog.save();
    return res
      .status(200)
      .send({ success: true, message: "Blog Added Successfully", blog });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Adding Blog",
    });
  }
};

// Update Blog
exports.updateBlogController = async (req, res) => {
  try {
    const { name, description, category, tag, detail, slug } = await req.fields;
    const { photo } = req.files;
    const { proSlug } = req.params;

    const categoryArray = JSON.parse(category);
    const tagArray = JSON.parse(tag);

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

    if (!category) {
      return res.status(200).send({
        succes: false,
        message: "Category Is required",
      });
    }

    if (!tag) {
      return res.status(200).send({
        succes: false,
        message: "Tag Is required",
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

    // Check Blog
    let blog = await Blog.findOne({ proSlug });
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog Not Found",
      });
    }
    blog = await Blog.findByIdAndUpdate(
      blog._id,
      {
        ...req.fields,
        category: categoryArray?.map((id) => new mongoose.Types.ObjectId(id)),
        tag: tagArray?.map((id) => new mongoose.Types.ObjectId(id)),
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      blog.photo.data = fs.readFileSync(photo.path);
      blog.photo.contentType = photo.type;
    }

    await blog.save();
    return res.status(200).send({
      success: true,
      message: "Blog Updated Successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating Blog",
    });
  }
};

// Get All Blogs
exports.getAllBlogController = async (req, res) => {
  try {
    const blogs = await Blog.find({})
      .populate("category")
      .populate("tag")
      .select("-photo");
    return res.status(200).send({
      success: true,
      message: "Getting All Blogs",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting All Blogs",
      error,
    });
  }
};

// Delete Blog
exports.deleteBlogController = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    // Check Blog
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog Not Found",
      });
    }
    blog = await Blog.findByIdAndDelete(blog._id);
    return res.status(200).send({
      success: true,
      message: "Blog Deleted Successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Blog",
      error,
    });
  }
};
// Get Single Blog For Update
exports.getSingleBlogController = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate({
        path: "category",
        select: "_id",
      })
      .populate({
        path: "tag",
        select: "_id",
      })
      .select("-photo");
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Blog",
      error,
    });
  }
};
// Get Single Blog For View
exports.getSingleBlogViewController = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate("category")
      .populate("tag")
      .select("-photo");
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog Not Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Getting Single Blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Single Blog",
      error,
    });
  }
};

// Get Blog Photo
exports.getBlogPhotoController = async (req, res) => {
  try {
    let blog = await Blog.findOne({ slug: req.params.slug }).select("photo");
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog Not Found",
      });
    }
    if (blog.photo.data) {
      res.set("Content-type", blog.photo.contentType);
      return res.status(200).send(blog.photo.data);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Blog Photo",
      error,
    });
  }
};

// Top Blog
exports.topBlogController = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(6);
    return res.status(200).send({
      success: true,
      message: "Getting Top Blogs",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Top Blogs",
      error,
    });
  }
};

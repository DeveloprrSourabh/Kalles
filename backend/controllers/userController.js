const { compare } = require("bcryptjs");
const { hashPassword, unHashPassword } = require("../helpers/userHelper");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Register User
exports.userRegisterController = async (req, res) => {
  try {
    const { name, email, password, answer, address, role } = req.body;
    if (!name) {
      return res.status(200).send({
        success: false,
        message: "Name is Required",
      });
    }
    if (!email) {
      return res.status(200).send({
        success: false,
        message: "Email is Required",
      });
    }
    if (!password) {
      return res
        .status(200)
        .send({ success: false, message: "Password is Required" });
    }
    if (!address) {
      return res
        .status(200)
        .send({ success: false, message: "Address is Required" });
    }
    if (!answer) {
      return res
        .status(200)
        .send({ success: false, message: "Answer is Required" });
    }
    // check user exists or not
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Register Please Login",
      });
    }

    // Hash Password
    const secPass = await hashPassword(password);

    // Register new user
    const user = await new User({
      name,
      email,
      role,
      answer,
      address,
      password: secPass,
    }).save();
    return res.status(200).send({
      success: true,
      message: "User Register Successfully",
      //   user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while register user",
    });
  }
};

// Login User
exports.userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    // Check User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Invalid Email",
      });
    }

    // Check Password
    const comparePass = await unHashPassword(password, user.password);

    if (!comparePass) {
      return res.status(400).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //Authentication Token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        password: password,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while register user",
    });
  }
};

// Forgot Password
exports.userForgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    // Check Validation
    if (!email) {
      return res.status(400).send({ message: "Email is Required" });
    }
    if (!answer) {
      return res.status(400).send({ message: "Answer is Required" });
    }
    if (!newPassword) {
      return res.status(400).send({ message: "New Password is Required" });
    }

    // Check User
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User Not Exists",
      });
    }

    // Check Answer
    if (user.answer === answer) {
      // Hash Password
      const secPass = await hashPassword(newPassword);
      user = await User.findByIdAndUpdate(
        user._id,
        { password: secPass },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "Forgot Password Successfully",
        // user,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "Answer Is Not Match",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while Forget Password",
      error,
    });
  }
};

// Update Profile
exports.userUpdateController = async (req, res) => {
  try {
    const { name, email, address, password, answer } = req.fields;
    const { photo } = req.files;

    // Get User
    let user = await User.findById(req.user._id);

    // Validation
    // if (!name && name === user.name) {
    //   return res.status(400).send({ message: "Name is Required" });
    // }
    // if (!email && email === user.email) {
    //   return res.status(400).send({ message: "Email is Required" });
    // }
    // if (!password && password === user.password) {
    //   return res.status(400).send({ message: "Password is Required" });
    // }
    // if (!address && address === user.address) {
    //   return res.status(400).send({ message: "Address is Required" });
    // }
    // if (!answer && answer === user.answer) {
    //   return res.status(400).send({ message: "Answer is Required" });
    // }

    if (
      (!name || name === user.name) &&
      (!email || email === user.email) &&
      (!address || address === user.address) &&
      (!answer || answer === user.answer) &&
      (!photo || photo.data == user.photo.data)
    ) {
      return res
        .status(200)
        .send({ success: false, message: "Please Enter All Fields...." });
    }

    // Check User
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "No User Found",
      });
    }
    // Hash Password
    const secPass = await hashPassword(password);
    user = await User.findByIdAndUpdate(
      user._id,
      {
        ...req.fields,
        password: secPass,
      },
      { new: true }
    );
    if (photo) {
      user.photo.data = fs.readFileSync(photo.path);
      user.photo.contentType = photo.type;
    }

    //Authentication Token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    await user.save();
    return res.status(200).send({
      success: true,
      message: "Profile Updated Succssfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        password: password,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating User Profile",
      error,
    });
  }
};

// Get User
exports.getUserController = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.status(200).send({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        answer: user.answer,
        address: user.address,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting User",
    });
  }
};

// Get User Photo
exports.getUserPhotoController = async (req, res) => {
  try {
    let category = await User.findById(req.params.id).select("photo");
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "User Not Found",
      });
    }
    if (category.photo.data) {
      res.set("Content-type", category.photo.contentType);
      return res.status(200).send(category.photo.data);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Getting Category Photo",
      error,
    });
  }
};

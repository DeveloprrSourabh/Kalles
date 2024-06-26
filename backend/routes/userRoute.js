const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userForgotPasswordController,
  userUpdateController,
  getUserPhotoController,
  getUserController,
} = require("../controllers/userController");
const { requireSignIn, isAdmin } = require("../middlewares/authmiddleware");
const formidable = require("express-formidable");

const router = express.Router();

// REGISTER USER || METHOD POST
router.post("/register", userRegisterController);

// LOGIN USER || METHOD POST
router.post("/login", userLoginController);

// FORGOT PASSWORD || METHOD POST
router.post("/forgot-password", userForgotPasswordController);

// Update PROFILE || METHOD PUT
router.put("/update-user", formidable(), requireSignIn, userUpdateController);

router.post("/getuser", requireSignIn, getUserController);

// ADMIN AUTH || METHOD GET
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  return res.status(200).send({ ok: true });
});

// User PHOTO
router.get("/user-photo/:id", getUserPhotoController);
// USER AUTH || METHOD GET
router.get("/user-auth", requireSignIn, (req, res) => {
  return res.status(200).send({ ok: true });
});

module.exports = router;

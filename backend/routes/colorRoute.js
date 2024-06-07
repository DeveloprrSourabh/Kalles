const express = require("express");
const formidable = require("express-formidable");
const {
  addColorController,
  updateColorController,
  deleteColorController,
  getAllColorController,
  getSingleColorController,
} = require("../controllers/colorController");

const router = express.Router();

router.post("/add-color", addColorController);

// UPDATE color || METHOD PUT
router.put("/update-color/:id", updateColorController);

// DELETE color || METHOD DELETE
router.delete("/delete-color/:id", deleteColorController);

// GET ALL color || METHOD GET
router.get("/all-colors", getAllColorController);

// GET SINGLE color || METHOD GET
router.get("/get-color/:id", getSingleColorController);

module.exports = router;

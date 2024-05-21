const express = require("express");
const formidable = require("express-formidable");
const {
  addTagController,
  updateTagController,
  deleteTagController,
  getAllTagController,
  getSingleTagController,
} = require("../controllers/tagController");

const router = express.Router();

router.post("/add-tag", addTagController);

// UPDATE tag || METHOD PUT
router.put("/update-tag/:id", updateTagController);

// DELETE tag || METHOD DELETE
router.delete("/delete-tag/:id", deleteTagController);

// GET ALL tag || METHOD GET
router.get("/all-tags", getAllTagController);

// GET SINGLE tag || METHOD GET
router.get("/get-tag/:id", getSingleTagController);

module.exports = router;

const express = require("express");
const { addtagController } = require("../controllers/tagController");

const router = express.Router();

router.post("/add-tag", addtagController);

module.exports = router;

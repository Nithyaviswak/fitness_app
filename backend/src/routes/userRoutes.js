const express = require("express");
const { createProfile } = require("../controllers/userController");

const router = express.Router();
router.post("/", createProfile);

module.exports = router;

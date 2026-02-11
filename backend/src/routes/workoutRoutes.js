const express = require("express");
const { generateWorkout, getDailyWorkout } = require("../controllers/workoutController");

const router = express.Router();
router.post("/generate", generateWorkout);
router.get("/daily/:planId", getDailyWorkout);

module.exports = router;

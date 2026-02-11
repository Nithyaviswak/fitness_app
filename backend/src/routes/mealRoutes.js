const express = require("express");
const { generateMeals, getDailyMeals, completeMeal } = require("../controllers/mealController");

const router = express.Router();
router.post("/generate", generateMeals);
router.get("/daily/:planId", getDailyMeals);
router.post("/complete", completeMeal);

module.exports = router;

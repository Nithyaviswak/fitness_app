const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const MealPlan = require("../models/MealPlan");
const { generateMealPlan } = require("../services/mealService");
const { validateProfile } = require("../utils/validators");
const { memoryStore } = require("../utils/memoryStore");

async function generateMeals(req, res) {
  const { valid, errors, sanitized } = validateProfile(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }
  const plan = generateMealPlan(sanitized);
  const planId = uuid();
  memoryStore.meals.set(planId, { ...plan, completed: {} });

  if (mongoose.connection.readyState === 1) {
    await MealPlan.create({
      targets: plan.targets,
      days: plan.days
    });
  }

  return res.json({ planId, ...plan });
}

async function getDailyMeals(req, res) {
  const { planId } = req.params;
  const { day } = req.query;
  const plan = memoryStore.meals.get(planId);
  if (!plan) {
    return res.status(404).json({ error: "Meal plan not found" });
  }
  const dayEntry = plan.days.find((item) => item.day === day) || plan.days[0];
  return res.json(dayEntry);
}

async function completeMeal(req, res) {
  const { planId, day, mealName } = req.body;
  const plan = memoryStore.meals.get(planId);
  if (!plan) {
    return res.status(404).json({ error: "Meal plan not found" });
  }
  if (!plan.completed[day]) {
    plan.completed[day] = [];
  }
  if (!plan.completed[day].includes(mealName)) {
    plan.completed[day].push(mealName);
  }
  return res.json({ completed: plan.completed[day] });
}

module.exports = { generateMeals, getDailyMeals, completeMeal };

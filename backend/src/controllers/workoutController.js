const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const WorkoutPlan = require("../models/WorkoutPlan");
const { generateWeeklyWorkoutPlan } = require("../services/workoutService");
const { validateProfile } = require("../utils/validators");
const { memoryStore } = require("../utils/memoryStore");

async function generateWorkout(req, res) {
  const { valid, errors, sanitized } = validateProfile(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }
  const plan = generateWeeklyWorkoutPlan(sanitized);
  const planId = uuid();
  memoryStore.workouts.set(planId, plan);

  if (mongoose.connection.readyState === 1) {
    await WorkoutPlan.create({
      summary: plan.summary,
      days: plan.days
    });
  }

  return res.json({ planId, ...plan });
}

async function getDailyWorkout(req, res) {
  const { planId } = req.params;
  const { day } = req.query;
  const plan = memoryStore.workouts.get(planId);
  if (!plan) {
    return res.status(404).json({ error: "Workout plan not found" });
  }
  const dayEntry = plan.days.find((item) => item.day === day) || plan.days[0];
  return res.json(dayEntry);
}

module.exports = { generateWorkout, getDailyWorkout };

const { clamp } = require("../utils/helpers");

function calculateNutritionTargets(profile) {
  const { age, gender, height, weight, daysPerWeek, goal } = profile;
  const bmr = calculateBmr(age, gender, height, weight);
  const tdee = Math.round(bmr * activityFactor(daysPerWeek));
  const workoutCalories = adjustCalories(tdee, goal, gender);
  const restCalories = adjustRestCalories(workoutCalories, gender);
  const workoutMacros = calculateMacros(workoutCalories, weight, goal);
  const restMacros = calculateMacros(restCalories, weight, goal);

  return {
    bmr,
    tdee,
    workoutCalories,
    restCalories,
    workoutMacros,
    restMacros
  };
}

function calculateBmr(age, gender, height, weight) {
  const base = 10 * weight + 6.25 * height - 5 * age;
  if (gender === "female") return Math.round(base - 161);
  return Math.round(base + 5);
}

function activityFactor(daysPerWeek) {
  if (daysPerWeek <= 2) return 1.375;
  if (daysPerWeek <= 4) return 1.55;
  if (daysPerWeek <= 5) return 1.725;
  return 1.9;
}

function adjustCalories(tdee, goal, gender) {
  let delta = 0;
  if (goal === "bulking") delta = 350;
  if (goal === "muscle_build") delta = 200;
  if (goal === "fat_loss") delta = -500;
  if (goal === "weight_loss") delta = -350;
  const min = gender === "female" ? 1200 : 1500;
  const adjusted = clamp(tdee + delta, min, tdee + 600);
  return Math.round(adjusted);
}

function adjustRestCalories(workoutCalories, gender) {
  const min = gender === "female" ? 1200 : 1500;
  return clamp(workoutCalories - 150, min, workoutCalories);
}

function calculateMacros(calories, weight, goal) {
  let proteinPerKg = 1.6;
  if (goal === "muscle_build") proteinPerKg = 2.0;
  if (goal === "fat_loss") proteinPerKg = 2.2;
  if (goal === "bulking") proteinPerKg = 1.8;
  const protein = Math.round(weight * proteinPerKg);
  const proteinCalories = protein * 4;
  const fatCalories = calories * 0.28;
  const fats = Math.round(fatCalories / 9);
  const remainingCalories = Math.max(calories - proteinCalories - fatCalories, calories * 0.2);
  const carbs = Math.round(remainingCalories / 4);
  return { protein, carbs, fats };
}

module.exports = {
  calculateNutritionTargets,
  calculateBmr,
  activityFactor,
  adjustCalories,
  adjustRestCalories,
  calculateMacros
};

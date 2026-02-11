const { DAY_NAMES, getTodayIndex } = require("../utils/constants");
const { calculateNutritionTargets } = require("./nutritionService");
const { buildDailyMeals } = require("./mealUtils");

function generateMealPlan(profile) {
  const targets = calculateNutritionTargets(profile);
  const trainingDays = Math.min(Math.max(profile.daysPerWeek, 2), 6);
  const todayIndex = getTodayIndex();
  const days = DAY_NAMES.map((day, index) => {
    const isToday = index === todayIndex;
    const isTrainingDay = index < trainingDays;
    const dailyCalories = isTrainingDay ? targets.workoutCalories : targets.restCalories;
    const { meals, totalCalories } = buildDailyMeals(profile, dailyCalories, index);
    return {
      day,
      meals,
      totalCalories,
      isToday
    };
  });

  const todayIsTraining = 0 < trainingDays;
  const todayMacros = todayIsTraining ? targets.workoutMacros : targets.restMacros;
  const responseTargets = {
    ...targets,
    todayCalories: todayIsTraining ? targets.workoutCalories : targets.restCalories,
    protein: todayMacros.protein,
    carbs: todayMacros.carbs,
    fats: todayMacros.fats,
    proteinRemaining: todayMacros.protein,
    carbsRemaining: todayMacros.carbs,
    fatsRemaining: todayMacros.fats
  };

  return {
    targets: responseTargets,
    days
  };
}

module.exports = { generateMealPlan };

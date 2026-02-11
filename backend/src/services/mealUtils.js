const { meals } = require("../data/meals");

function buildDailyMeals(profile, dailyCalories, dayIndex) {
  const { dietPreference, mealsPerDay, allergies } = profile;
  const filtered = meals.filter((meal) => {
    const dietMatch = meal.diet.includes(dietPreference);
    const allergyHit = allergies.some((item) => meal.allergens.includes(item));
    return dietMatch && !allergyHit;
  });

  const mealSlots = Math.max(3, Math.min(mealsPerDay, 6));
  const selected = pickMealsForDay(filtered, mealSlots, dayIndex);
  const caloriesPerMeal = Math.round(dailyCalories / mealSlots);

  const mealsScaled = selected.map((meal) => {
    const scale = caloriesPerMeal / meal.calories;
    return {
      name: meal.name,
      ingredients: meal.ingredients,
      portionSize: meal.portionSize,
      calories: Math.round(meal.calories * scale),
      protein: Math.round(meal.protein * scale),
      carbs: Math.round(meal.carbs * scale),
      fats: Math.round(meal.fats * scale),
      prepSteps: meal.prepSteps,
      tips: meal.tips,
      benefits: meal.benefits,
      bestTime: meal.bestTime,
      cooling: Boolean(meal.cooling)
    };
  });

  const totalCalories = mealsScaled.reduce((sum, meal) => sum + meal.calories, 0);

  return { meals: mealsScaled, totalCalories };
}

function pickMealsForDay(pool, mealSlots, dayIndex) {
  if (!pool.length) return [];
  const rotated = rotatePool(pool, dayIndex);
  const distinct = [];
  const usedNames = new Set();

  for (const meal of rotated) {
    if (distinct.length >= mealSlots) break;
    if (!usedNames.has(meal.name)) {
      distinct.push(meal);
      usedNames.add(meal.name);
    }
  }

  // Ensure at least one cooling meal per day if available.
  const hasCooling = distinct.some((meal) => meal.cooling);
  if (!hasCooling) {
    const coolingMeal = rotated.find((meal) => meal.cooling);
    if (coolingMeal) {
      distinct[distinct.length - 1] = coolingMeal;
    }
  }

  return distinct;
}

function rotatePool(pool, dayIndex) {
  const offset = dayIndex % pool.length;
  return pool.slice(offset).concat(pool.slice(0, offset));
}

module.exports = { buildDailyMeals };

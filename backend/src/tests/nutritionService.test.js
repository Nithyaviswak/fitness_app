const { calculateNutritionTargets, adjustCalories } = require("../services/nutritionService");

test("calorie adjustment stays within safe range", () => {
  const calories = adjustCalories(2000, "fat_loss", "female");
  expect(calories).toBeGreaterThanOrEqual(1200);
});

test("nutrition targets include macros", () => {
  const result = calculateNutritionTargets({
    age: 25,
    gender: "male",
    height: 175,
    weight: 70,
    daysPerWeek: 4,
    goal: "maintenance"
  });
  expect(result.workoutMacros.protein).toBeGreaterThan(0);
  expect(result.workoutMacros.carbs).toBeGreaterThan(0);
  expect(result.workoutMacros.fats).toBeGreaterThan(0);
});

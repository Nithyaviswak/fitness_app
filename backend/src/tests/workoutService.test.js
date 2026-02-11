const { generateWeeklyWorkoutPlan } = require("../services/workoutService");

test("workout plan matches requested days", () => {
  const plan = generateWeeklyWorkoutPlan({
    daysPerWeek: 4,
    experience: "beginner",
    goal: "maintenance",
    equipment: ["bodyweight"]
  });
  const trainingDays = plan.days.filter((day) => day.focus !== "Recovery");
  expect(trainingDays.length).toBe(4);
});

const { pickExercisesForDay, estimateCaloriesBurned } = require("./workoutUtils");
const { DAY_NAMES, getTodayIndex } = require("../utils/constants");

function generateWeeklyWorkoutPlan(profile) {
  const { daysPerWeek, experience, goal } = profile;
  const trainingDays = Math.min(Math.max(daysPerWeek, 2), 6);
  const restDays = 7 - trainingDays;
  const splits = buildSplit(trainingDays);

  const todayIndex = getTodayIndex();
  const days = DAY_NAMES.map((day, index) => {
    const isTrainingDay = index < trainingDays;
    if (!isTrainingDay) {
      return {
        day,
        focus: "Recovery",
        difficulty: "Easy",
        exercises: [
          {
            name: "Mobility flow",
            sets: 1,
            reps: "10 min",
            rest: 30,
            instructions: [
              "Move through hip, shoulder, and ankle circles",
              "Stay relaxed and breathe slowly"
            ],
            targetMuscles: ["Full body"],
            mistakes: ["Rushing", "Holding breath"],
            tips: ["Keep movements pain free"]
          }
        ],
        caloriesBurned: 120,
        isToday: index === todayIndex
      };
    }

    const focus = splits[index % splits.length];
    const exercises = pickExercisesForDay(profile, focus);
    return {
      day,
      focus,
      difficulty: experience,
      exercises,
      caloriesBurned: estimateCaloriesBurned(exercises, goal),
      isToday: index === todayIndex
    };
  });

  return {
    summary: {
      trainingDays,
      restDays,
      focusSplit: splits
    },
    days
  };
}

function buildSplit(trainingDays) {
  if (trainingDays <= 3) {
    return ["Full body", "Upper body", "Lower body"];
  }
  if (trainingDays === 4) {
    return ["Upper body", "Lower body", "Push", "Pull"];
  }
  if (trainingDays === 5) {
    return ["Push", "Pull", "Legs", "Upper", "Lower"];
  }
  return ["Push", "Pull", "Legs", "Upper", "Lower", "Core"];
}

module.exports = { generateWeeklyWorkoutPlan };

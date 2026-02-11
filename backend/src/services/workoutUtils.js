const { exercises } = require("../data/exercises");

function pickExercisesForDay(profile, focus) {
  const { equipment, experience } = profile;
  const allowed = exercises.filter((exercise) => {
    const matchesEquipment = exercise.equipment.some((item) => equipment.includes(item));
    const safeForLevel = !(experience === "beginner" && exercise.unsafeForBeginners);
    return matchesEquipment && safeForLevel && exercise.focus.includes(focus);
  });

  const base = allowed.length ? allowed : exercises.filter((ex) => ex.focus.includes("Full body"));
  const selected = base.slice(0, 5);

  return selected.map((exercise) => ({
    name: exercise.name,
    sets: exercise.sets[experience],
    reps: exercise.reps[experience],
    rest: exercise.rest,
    instructions: exercise.instructions,
    targetMuscles: exercise.targetMuscles,
    mistakes: exercise.mistakes,
    tips: exercise.tips
  }));
}

function estimateCaloriesBurned(exercises, goal) {
  const base = exercises.length * 35;
  if (goal === "fat_loss" || goal === "weight_loss") return base + 50;
  if (goal === "bulking" || goal === "muscle_build") return base + 20;
  return base;
}

module.exports = { pickExercisesForDay, estimateCaloriesBurned };

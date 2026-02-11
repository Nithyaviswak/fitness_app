function validateProfile(data) {
  const errors = [];
  const sanitized = {
    age: Number(data.age),
    gender: data.gender || "male",
    height: Number(data.height),
    weight: Number(data.weight),
    goal: data.goal || "maintenance",
    experience: data.experience || "beginner",
    equipment: Array.isArray(data.equipment) && data.equipment.length ? data.equipment : ["bodyweight"],
    daysPerWeek: Number(data.daysPerWeek || 3),
    dietPreference: data.dietPreference || "vegetarian",
    mealsPerDay: Number(data.mealsPerDay || 4),
    budget: data.budget || "medium",
    allergies: Array.isArray(data.allergies) ? data.allergies : [],
    region: data.region || "Indian"
  };

  if (Number.isNaN(sanitized.age) || sanitized.age < 13 || sanitized.age > 80) {
    errors.push("Age must be between 13 and 80.");
  }
  if (!sanitizeInList(sanitized.gender, ["male", "female", "other"])) {
    errors.push("Gender is invalid.");
  }
  if (Number.isNaN(sanitized.height) || sanitized.height < 120 || sanitized.height > 230) {
    errors.push("Height must be between 120 and 230 cm.");
  }
  if (Number.isNaN(sanitized.weight) || sanitized.weight < 35 || sanitized.weight > 200) {
    errors.push("Weight must be between 35 and 200 kg.");
  }
  if (!sanitizeInList(sanitized.goal, ["bulking", "muscle_build", "fat_loss", "weight_loss", "maintenance"])) {
    errors.push("Goal is invalid.");
  }
  if (!sanitizeInList(sanitized.experience, ["beginner", "intermediate", "advanced"])) {
    errors.push("Experience level is invalid.");
  }
  if (!Array.isArray(sanitized.equipment) || sanitized.equipment.length === 0) {
    errors.push("At least one equipment option is required.");
  }
  if (Number.isNaN(sanitized.daysPerWeek) || sanitized.daysPerWeek < 2 || sanitized.daysPerWeek > 6) {
    errors.push("Workout days must be between 2 and 6.");
  }
  if (!sanitizeInList(sanitized.dietPreference, ["vegetarian", "non_vegetarian", "vegan"])) {
    errors.push("Diet preference is invalid.");
  }
  if (Number.isNaN(sanitized.mealsPerDay) || sanitized.mealsPerDay < 3 || sanitized.mealsPerDay > 6) {
    errors.push("Meals per day must be between 3 and 6.");
  }
  if (!sanitizeInList(sanitized.budget, ["low", "medium", "high"])) {
    errors.push("Budget preference is invalid.");
  }

  return {
    valid: errors.length === 0,
    errors,
    sanitized
  };
}

function sanitizeInList(value, list) {
  return list.includes(value);
}

module.exports = { validateProfile };

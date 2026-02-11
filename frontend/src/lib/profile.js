export const defaultProfile = {
  age: 25,
  gender: "male",
  height: 175,
  weight: 72,
  goal: "maintenance",
  experience: "beginner",
  equipment: ["bodyweight"],
  daysPerWeek: 4,
  dietPreference: "vegetarian",
  mealsPerDay: 4,
  budget: "medium",
  allergies: "",
  region: "Indian"
};

export function buildPayload(formData) {
  return {
    ...formData,
    age: Number(formData.age),
    height: Number(formData.height),
    weight: Number(formData.weight),
    daysPerWeek: Number(formData.daysPerWeek),
    mealsPerDay: Number(formData.mealsPerDay),
    allergies: formData.allergies
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
  };
}

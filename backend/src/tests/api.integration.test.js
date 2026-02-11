const request = require("supertest");
const app = require("../app");

test("workout generate returns plan", async () => {
  const response = await request(app)
    .post("/api/workout/generate")
    .send({
      age: 25,
      gender: "male",
      height: 175,
      weight: 70,
      goal: "maintenance",
      experience: "beginner",
      equipment: ["bodyweight"],
      daysPerWeek: 3,
      dietPreference: "vegetarian",
      mealsPerDay: 4,
      budget: "medium",
      allergies: [],
      region: "Indian"
    });
  expect(response.status).toBe(200);
  expect(response.body.days).toBeDefined();
});

test("meal generate returns plan", async () => {
  const response = await request(app)
    .post("/api/meals/generate")
    .send({
      age: 25,
      gender: "male",
      height: 175,
      weight: 70,
      goal: "maintenance",
      experience: "beginner",
      equipment: ["bodyweight"],
      daysPerWeek: 3,
      dietPreference: "vegetarian",
      mealsPerDay: 4,
      budget: "medium",
      allergies: [],
      region: "Indian"
    });
  expect(response.status).toBe(200);
  expect(response.body.days).toBeDefined();
});

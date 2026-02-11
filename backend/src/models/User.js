const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    goal: String,
    experience: String,
    equipment: [String],
    daysPerWeek: Number,
    dietPreference: String,
    mealsPerDay: Number,
    budget: String,
    allergies: [String],
    region: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

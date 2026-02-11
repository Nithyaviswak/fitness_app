const mongoose = require("mongoose");

const MealPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    targets: Object,
    days: Array
  },
  { timestamps: true }
);

module.exports = mongoose.model("MealPlan", MealPlanSchema);

const mongoose = require("mongoose");

const WorkoutPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    summary: Object,
    days: Array
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkoutPlan", WorkoutPlanSchema);

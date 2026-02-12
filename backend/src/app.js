const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Route Imports
const workoutRoutes = require("./routes/workoutRoutes");
const mealRoutes = require("./routes/mealRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- 1. Root Route (FIX FOR 404 ERROR) ---
// This ensures that when you open the base URL, you see a success message.
app.get("/", (req, res) => {
  res.send("Fitness App Backend is Running! Access API at /api/workout, /api/meals, etc.");
});

// --- 2. Health Check (Keep this, it's good practice) ---
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// --- 3. API Routes ---
// IMPORTANT: Make sure your Frontend calls these exact paths!
app.use("/api/profile", userRoutes); // Frontend must fetch('/api/profile')
app.use("/api/workout", workoutRoutes);
app.use("/api/meals", mealRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

module.exports = app;
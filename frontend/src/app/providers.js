"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { buildPayload } from "../lib/profile";

const AppContext = createContext(null);

const STORAGE_KEY = "fitness_app_state_v1";

function loadStoredState() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function saveStoredState(state) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    // Ignore storage failures.
  }
}

export function AppProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);
  const [completion, setCompletion] = useState({});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const stored = loadStoredState();
    if (stored) {
      setProfile(stored.profile || null);
      setWorkoutPlan(stored.workoutPlan || null);
      setMealPlan(stored.mealPlan || null);
      setCompletion(stored.completion || {});
    }
  }, []);

  useEffect(() => {
    saveStoredState({ profile, workoutPlan, mealPlan, completion });
  }, [profile, workoutPlan, mealPlan, completion]);

  async function generatePlans(formData) {
    setStatus("loading");
    setError(null);
    try {
      const payload = buildPayload(formData);
      setProfile(payload);
      const [workoutRes, mealRes] = await Promise.all([
        fetch("https://fitness-app-zobv.onrender.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }),
        fetch("https://fitness-app-zobv.onrender.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
      ]);

      if (!workoutRes.ok) {
        const err = await safeJson(workoutRes);
        throw new Error(formatApiError("Workout plan failed.", err));
      }
      if (!mealRes.ok) {
        const err = await safeJson(mealRes);
        throw new Error(formatApiError("Meal plan failed.", err));
      }

      const workoutJson = await workoutRes.json();
      const mealJson = await mealRes.json();
      setWorkoutPlan(workoutJson);
      setMealPlan(mealJson);
      saveStoredState({
        profile: payload,
        workoutPlan: workoutJson,
        mealPlan: mealJson,
        completion
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  function toggleExercise(dayName, exerciseName) {
    setCompletion((prev) => {
      const day = prev[dayName] || [];
      const exists = day.includes(exerciseName);
      const nextDay = exists ? day.filter((item) => item !== exerciseName) : [...day, exerciseName];
      return { ...prev, [dayName]: nextDay };
    });
  }

  function isExerciseDone(dayName, exerciseName) {
    return (completion[dayName] || []).includes(exerciseName);
  }

  const value = useMemo(
    () => ({
      profile,
      workoutPlan,
      mealPlan,
      completion,
      status,
      error,
      generatePlans,
      toggleExercise,
      isExerciseDone
    }),
    [profile, workoutPlan, mealPlan, completion, status, error]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch (err) {
    return null;
  }
}

function formatApiError(prefix, err) {
  if (!err) return `${prefix} Check inputs and try again.`;
  if (Array.isArray(err.errors) && err.errors.length) {
    return `${prefix} ${err.errors.join(" ")}`;
  }
  if (err.error) return `${prefix} ${err.error}`;
  return `${prefix} Check inputs and try again.`;
}

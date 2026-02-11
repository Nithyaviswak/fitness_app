"use client";

import PlanPanel from "../../components/PlanPanel";
import { useApp } from "../providers";

export default function PlansPage() {
  const { workoutPlan, mealPlan } = useApp();

  return (
    <div className="section">
      <h2 className="text-xl font-semibold">Weekly plans</h2>
      <p className="mt-2 text-sm text-slate-600">
        Your workouts and meals for the full week. Adjust recovery days if you need extra rest.
      </p>
      <PlanPanel workoutPlan={workoutPlan} mealPlan={mealPlan} />
    </div>
  );
}

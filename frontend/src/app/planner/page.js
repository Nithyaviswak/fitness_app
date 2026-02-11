"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import WizardForm from "../../components/WizardForm";
import { useApp } from "../providers";

export default function PlannerPage() {
  const router = useRouter();
  const { generatePlans, status, error, workoutPlan, mealPlan } = useApp();

  useEffect(() => {
    if (status === "success" && workoutPlan && mealPlan) {
      const timer = setTimeout(() => router.push("/dashboard"), 600);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [status, workoutPlan, mealPlan, router]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="section">
        <h2 className="text-xl font-semibold">Personalize your plan</h2>
        <p className="mt-2 text-sm text-slate-600">
          Tell us about your body, goal, equipment, and diet preferences. We will build a weekly
          workout plan and an Indian diet plan that keeps you safe and consistent.
        </p>
        <WizardForm onGenerate={generatePlans} status={status} error={error} />
      </section>

      <section className="section">
        <h2 className="text-xl font-semibold">Plan preview</h2>
        <p className="mt-2 text-sm text-slate-600">
          Generate your plan to unlock today&apos;s dashboard and the weekly schedule.
        </p>
        <div className="mt-6 grid gap-4">
          {status === "success" && workoutPlan && mealPlan ? (
            <div className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Plan ready</p>
              <p className="mt-2 text-sm text-slate-700">
                You have {workoutPlan.summary.trainingDays} training days and {mealPlan.days.length} meal days.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link className="button" href="/dashboard">Go to today</Link>
                <Link className="button ghost" href="/plans">View weekly</Link>
              </div>
            </div>
          ) : null}
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">What you get</p>
            <ul className="mt-2 list-disc pl-4 text-sm text-slate-600">
              <li>Adaptive workout split based on recovery</li>
              <li>Exercise cues and safety tips</li>
              <li>Nutrition targets for training and rest days</li>
              <li>7-day Indian meal plan with macros</li>
            </ul>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trainer notes</p>
            <p className="mt-2 text-sm text-slate-600">
              If you&apos;re a beginner, we keep movements joint-friendly and skip heavy barbell lifts.
              Focus on quality reps, controlled tempo, and steady progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

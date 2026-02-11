import { useMemo } from "react";
import { useApp } from "../app/providers";

export default function TodayDashboard({ data }) {
  const { today, todayMeals, targets } = data;
  const { toggleExercise, isExerciseDone } = useApp();

  const calories = useMemo(() => {
    return Math.round(today.caloriesBurned || 0);
  }, [today]);

  const completion = useMemo(() => {
    if (!today.exercises.length) return 0;
    const completedCount = today.exercises.filter((exercise) =>
      isExerciseDone(today.day, exercise.name)
    ).length;
    return Math.round((completedCount / today.exercises.length) * 100);
  }, [today, isExerciseDone]);

  return (
    <div className="mt-6 grid gap-4">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Workout focus</p>
            <h3 className="text-lg font-semibold">{today.focus}</h3>
          </div>
          <div className="text-sm text-slate-600">Difficulty: {today.difficulty}</div>
        </div>
        <p className="mt-3 text-sm text-slate-600">Estimated calories burned: {calories} kcal</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Checklist</p>
        <div className="mt-3">
          <div className="progress">
            <span style={{ width: `${completion}%` }} />
          </div>
          <p className="mt-2 text-xs text-slate-500">{completion}% completed</p>
        </div>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700">
          {today.exercises.map((exercise) => (
            <li key={exercise.name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isExerciseDone(today.day, exercise.name)}
                onChange={() => toggleExercise(today.day, exercise.name)}
              />
              <span>{exercise.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Today's nutrition target</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <span className="badge">Calories: {targets.todayCalories} kcal</span>
          <span className="badge">Protein remaining: {targets.proteinRemaining} g</span>
          <span className="badge">Carbs: {targets.carbs} g</span>
          <span className="badge">Fats: {targets.fats} g</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Meals today</p>
        <ul className="mt-3 grid gap-3 text-sm text-slate-700">
          {todayMeals.meals.map((meal) => (
            <li key={meal.name} className="rounded-xl border border-slate-200 p-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{meal.name}</span>
                <span>{meal.calories} kcal</span>
              </div>
              <p className="text-xs text-slate-500">
                {meal.bestTime} · {meal.cooling ? "Cooling choice" : "Balanced choice"}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Meal detail</p>
        {todayMeals.meals[0] ? (
          <div className="mt-3 text-sm text-slate-700">
            <div className="font-semibold">{todayMeals.meals[0].name}</div>
            <div className="text-xs text-slate-500">
              Prep: {todayMeals.meals[0].prepSteps.join(" | ")}
            </div>
            <div className="text-xs text-slate-500">
              Tips: {todayMeals.meals[0].tips.join(", ")}
            </div>
            <div className="text-xs text-slate-500">
              Benefits: {todayMeals.meals[0].benefits.join(", ")}
            </div>
            <div className="text-xs text-slate-500">Best time: {todayMeals.meals[0].bestTime}</div>
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-600">No meals for today.</p>
        )}
      </div>
    </div>
  );
}

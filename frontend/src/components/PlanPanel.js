export default function PlanPanel({ workoutPlan, mealPlan }) {
  if (!workoutPlan || !mealPlan) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
        Your plans will appear here after generation.
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="text-lg font-semibold">Workout plan</h3>
        <div className="mt-4 grid gap-4">
          {workoutPlan.days.map((day) => (
            <div key={day.day} className="rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${day.isToday ? "text-ink" : ""}`}>{day.day}</span>
                <span className="text-xs text-slate-500">{day.focus}</span>
              </div>
              <ul className="mt-2 grid gap-2 text-sm text-slate-600">
                {day.exercises.map((ex) => (
                  <li key={ex.name}>
                    <div className="font-semibold">
                      {ex.name} · {ex.sets}x{ex.reps} · Rest {ex.rest}s
                    </div>
                    <div className="text-xs text-slate-500">
                      Targets: {ex.targetMuscles.join(", ")} · Mistakes: {ex.mistakes.join(", ")}
                    </div>
                    <div className="text-xs text-slate-500">
                      Tips: {ex.tips.join(", ")} · Steps: {ex.instructions.join(" | ")}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="text-lg font-semibold">Meal plan</h3>
        <div className="mt-4 grid gap-4">
          {mealPlan.days.map((day) => (
            <div key={day.day} className="rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${day.isToday ? "text-ink" : ""}`}>{day.day}</span>
                <span className="text-xs text-slate-500">{day.totalCalories} kcal</span>
              </div>
              <ul className="mt-2 grid gap-2 text-sm text-slate-600">
                {day.meals.map((meal) => (
                  <li key={meal.name}>
                    <div className="font-semibold">
                      {meal.name} · {meal.calories} kcal · {meal.protein}g protein
                    </div>
                    <div className="text-xs text-slate-500">
                      Ingredients: {meal.ingredients.join(", ")}
                    </div>
                    <div className="text-xs text-slate-500">
                      Prep: {meal.prepSteps.join(" | ")}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

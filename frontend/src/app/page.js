import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="section hero-panel">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Personalized fitness</p>
          <h2 className="mt-2 text-3xl font-semibold">Train smart. Eat well. Feel strong.</h2>
          <p className="mt-4 text-sm text-slate-600">
            Pulse Forge builds weekly training and Indian meal plans tailored to your goal,
            equipment, and lifestyle. Safe, beginner-friendly, and ready in minutes.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="button" href="/planner">Build my plan</Link>
          <Link className="button ghost" href="/dashboard">View today</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Workouts</p>
            <p className="mt-2 text-sm text-slate-700">Adaptive splits, safe exercise guidance, and recovery prompts.</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Nutrition</p>
            <p className="mt-2 text-sm text-slate-700">Indian meal plans with calories, macros, and prep tips.</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Consistency</p>
            <p className="mt-2 text-sm text-slate-700">Daily dashboard with checklists and progress cues.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h3 className="text-xl font-semibold">How it works</h3>
        <ol className="mt-5 grid gap-4 text-sm text-slate-700">
          <li className="step">
            <span>1</span>
            <div>
              <p className="font-semibold">Share your stats</p>
              <p className="text-slate-600">Age, goal, equipment, and diet preferences.</p>
            </div>
          </li>
          <li className="step">
            <span>2</span>
            <div>
              <p className="font-semibold">Get a weekly plan</p>
              <p className="text-slate-600">Workouts + meals auto-adjusted for training days.</p>
            </div>
          </li>
          <li className="step">
            <span>3</span>
            <div>
              <p className="font-semibold">Track daily wins</p>
              <p className="text-slate-600">Check off exercises and meals as you go.</p>
            </div>
          </li>
        </ol>
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-600">
          Ready to personalize? Head to the planner to generate your plan.
        </div>
      </section>
    </div>
  );
}

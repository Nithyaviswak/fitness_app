"use client";

import { useEffect, useMemo, useState } from "react";
import TodayDashboard from "../../components/TodayDashboard";
import { useApp } from "../providers";

export default function DashboardPage() {
  const { workoutPlan, mealPlan, completion } = useApp();
  const [selectedDay, setSelectedDay] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [prevStreak, setPrevStreak] = useState(0);
  const todayData = useMemo(() => {
    if (!workoutPlan || !mealPlan) return null;
    const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const today = workoutPlan.days.find((day) => day.day === todayName) || workoutPlan.days[0];
    const todayMeals = mealPlan.days.find((day) => day.day === todayName) || mealPlan.days[0];
    return { today, todayMeals, targets: mealPlan.targets };
  }, [workoutPlan, mealPlan]);

  const weeklySummary = useMemo(() => {
    if (!workoutPlan) return null;
    const totalDays = workoutPlan.days.length;
    const dayStats = workoutPlan.days.map((day) => {
      const completed = completion[day.day] || [];
      const total = day.exercises.length || 1;
      const percent = Math.round((completed.length / total) * 100);
      return { day: day.day, percent };
    });
    let streak = 0;
    for (let i = 0; i < dayStats.length; i += 1) {
      if (dayStats[i].percent === 100) streak += 1;
      else break;
    }
    const weeklyCompletion = Math.round(
      dayStats.reduce((sum, day) => sum + day.percent, 0) / totalDays
    );
    return { dayStats, streak, weeklyCompletion };
  }, [workoutPlan, completion]);

  useEffect(() => {
    if (!weeklySummary) return;
    if (weeklySummary.streak > prevStreak) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 1600);
      setPrevStreak(weeklySummary.streak);
      return () => clearTimeout(timer);
    }
    setPrevStreak(weeklySummary.streak);
  }, [weeklySummary, prevStreak]);

  useEffect(() => {
    if (workoutPlan && !selectedDay) {
      setSelectedDay(workoutPlan.days[0].day);
    }
  }, [workoutPlan, selectedDay]);

  const selectedDayData = useMemo(() => {
    if (!workoutPlan || !selectedDay) return null;
    const day = workoutPlan.days.find((item) => item.day === selectedDay) || workoutPlan.days[0];
    const completed = completion[day.day] || [];
    const percent = Math.round((completed.length / (day.exercises.length || 1)) * 100);
    return { ...day, percent };
  }, [workoutPlan, selectedDay, completion]);

  return (
    <div className="section">
      <h2 className="text-xl font-semibold">Today&apos;s dashboard</h2>
      <p className="mt-2 text-sm text-slate-600">
        Track your focus, check off exercises, and keep an eye on nutrition targets.
      </p>
      {todayData ? (
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <TodayDashboard data={todayData} />
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Momentum</h3>
            <p className="mt-2 text-sm text-slate-600">
              Keep the streak alive by completing every exercise on your training days.
            </p>
            {weeklySummary ? (
              <div className="mt-5 grid gap-4">
                <div className="card">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Current streak</p>
                  <p className="mt-2 text-2xl font-semibold">{weeklySummary.streak} days</p>
                </div>
                <div className="card">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Weekly completion</p>
                  <p className="mt-2 text-2xl font-semibold">{weeklySummary.weeklyCompletion}%</p>
                </div>
                <div className="card">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Week at a glance</p>
                  <div className="mt-3 grid gap-2">
                    {weeklySummary.dayStats.map((day) => (
                      <div key={day.day} className="flex items-center gap-3">
                        <span className="w-20 text-xs text-slate-500">{day.day.slice(0, 3)}</span>
                        <div className="progress flex-1">
                          <span style={{ width: `${day.percent}%` }} />
                        </div>
                        <span className="text-xs text-slate-500">{day.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Weekly calendar</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {workoutPlan.days.map((day) => (
                      <button
                        key={day.day}
                        type="button"
                        className={`rounded-full border px-3 py-2 text-xs font-semibold ${
                          selectedDay === day.day
                            ? "border-ink bg-ink text-white"
                            : "border-slate-300 bg-white text-slate-600"
                        }`}
                        onClick={() => setSelectedDay(day.day)}
                      >
                        {day.day.slice(0, 3)}
                      </button>
                    ))}
                  </div>
                  {selectedDayData ? (
                    <div className="mt-4 rounded-2xl border border-dashed border-slate-200 p-3 text-sm text-slate-600">
                      <p className="font-semibold text-slate-700">{selectedDayData.day}</p>
                      <p className="text-xs text-slate-500">{selectedDayData.focus}</p>
                      <p className="mt-2 text-xs text-slate-500">
                        {selectedDayData.exercises.length} exercises · {selectedDayData.percent}% completed
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
                Generate a plan to see streaks and weekly completion.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          Generate a plan in the Planner tab to unlock your dashboard.
        </div>
      )}
      {showConfetti ? (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, index) => {
            const left = Math.round(Math.random() * 100);
            const delay = Math.random() * 0.3;
            const colors = ["#eedd00", "#a76bcf", "#fae7b5", "#e0b0ff"];
            const color = colors[index % colors.length];
            return (
              <span
                key={index}
                style={{
                  left: `${left}%`,
                  top: `-${Math.round(Math.random() * 20)}px`,
                  background: color,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

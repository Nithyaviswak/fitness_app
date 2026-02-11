import { useMemo, useState } from "react";
import { defaultProfile } from "../lib/profile";

const equipmentOptions = ["gym", "dumbbells", "bodyweight"];

const steps = [
  { id: "basics", title: "Basics" },
  { id: "training", title: "Training" },
  { id: "nutrition", title: "Nutrition" },
  { id: "review", title: "Review" }
];

export default function WizardForm({ onGenerate, status, error }) {
  const [formData, setFormData] = useState(defaultProfile);
  const [stepIndex, setStepIndex] = useState(0);

  const step = steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  function updateField(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function toggleEquipment(item) {
    setFormData((prev) => {
      const set = new Set(prev.equipment);
      if (set.has(item)) set.delete(item);
      else set.add(item);
      return { ...prev, equipment: Array.from(set) };
    });
  }

  function nextStep() {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function prevStep() {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  }

  function submit(e) {
    e.preventDefault();
    onGenerate(formData);
  }

  const reviewItems = useMemo(
    () => [
      { label: "Age", value: formData.age },
      { label: "Gender", value: formData.gender },
      { label: "Height", value: `${formData.height} cm` },
      { label: "Weight", value: `${formData.weight} kg` },
      { label: "Goal", value: formData.goal },
      { label: "Experience", value: formData.experience },
      { label: "Days per week", value: formData.daysPerWeek },
      { label: "Equipment", value: formData.equipment.join(", ") },
      { label: "Diet", value: formData.dietPreference },
      { label: "Meals per day", value: formData.mealsPerDay },
      { label: "Budget", value: formData.budget },
      { label: "Allergies", value: formData.allergies || "None" },
      { label: "Region", value: formData.region }
    ],
    [formData]
  );

  return (
    <form className="mt-6 grid gap-6" onSubmit={submit}>
      <div className="wizard-head">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Step {stepIndex + 1} of {steps.length}</p>
          <h3 className="text-lg font-semibold">{step.title}</h3>
        </div>
        <div className="wizard-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step.id === "basics" && (
        <div key={step.id} className="wizard-step grid gap-4 md:grid-cols-2">
          <div>
            <label className="label">Age</label>
            <input className="input" name="age" type="number" min="13" max="80" value={formData.age} onChange={updateField} />
          </div>
          <div>
            <label className="label">Gender</label>
            <select className="input" name="gender" value={formData.gender} onChange={updateField}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="label">Height (cm)</label>
            <input className="input" name="height" type="number" min="120" max="230" value={formData.height} onChange={updateField} />
          </div>
          <div>
            <label className="label">Weight (kg)</label>
            <input className="input" name="weight" type="number" min="35" max="200" value={formData.weight} onChange={updateField} />
          </div>
        </div>
      )}

      {step.id === "training" && (
        <div key={step.id} className="wizard-step grid gap-4 md:grid-cols-2">
          <div>
            <label className="label">Fitness goal</label>
            <select className="input" name="goal" value={formData.goal} onChange={updateField}>
              <option value="bulking">Bulking</option>
              <option value="muscle_build">Muscle build</option>
              <option value="fat_loss">Fat loss</option>
              <option value="weight_loss">Weight loss</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div>
            <label className="label">Experience level</label>
            <select className="input" name="experience" value={formData.experience} onChange={updateField}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="label">Workout days per week</label>
            <input className="input" name="daysPerWeek" type="number" min="2" max="6" value={formData.daysPerWeek} onChange={updateField} />
          </div>
          <div>
            <label className="label">Available equipment</label>
            <div className="mt-3 flex flex-wrap gap-3">
              {equipmentOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleEquipment(item)}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    formData.equipment.includes(item)
                      ? "border-ink bg-ink text-white"
                      : "border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step.id === "nutrition" && (
        <div key={step.id} className="wizard-step grid gap-4 md:grid-cols-2">
          <div>
            <label className="label">Diet preference</label>
            <select className="input" name="dietPreference" value={formData.dietPreference} onChange={updateField}>
              <option value="vegetarian">Vegetarian</option>
              <option value="non_vegetarian">Non-vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
          <div>
            <label className="label">Meals per day</label>
            <select className="input" name="mealsPerDay" value={formData.mealsPerDay} onChange={updateField}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            <label className="label">Budget preference</label>
            <select className="input" name="budget" value={formData.budget} onChange={updateField}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label className="label">Allergies (comma separated)</label>
            <input className="input" name="allergies" type="text" value={formData.allergies} onChange={updateField} />
          </div>
          <div className="md:col-span-2">
            <label className="label">Regional preference</label>
            <input className="input" name="region" type="text" value={formData.region} onChange={updateField} />
          </div>
        </div>
      )}

      {step.id === "review" && (
        <div key={step.id} className="wizard-step grid gap-3 md:grid-cols-2">
          {reviewItems.map((item) => (
            <div key={item.label} className="card">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-sm text-slate-700">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      <div className="wizard-actions">
        <button type="button" className="button ghost" onClick={prevStep} disabled={stepIndex === 0}>
          Back
        </button>
        {step.id !== "review" ? (
          <button type="button" className="button" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button className="button" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Generating..." : "Generate plan"}
          </button>
        )}
      </div>
    </form>
  );
}

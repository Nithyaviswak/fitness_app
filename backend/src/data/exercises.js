const exercises = [
  {
    name: "Goblet squat",
    focus: ["Lower body", "Legs", "Full body"],
    equipment: ["dumbbells", "gym"],
    sets: { beginner: 3, intermediate: 4, advanced: 5 },
    reps: { beginner: "10", intermediate: "12", advanced: "10-12" },
    rest: 60,
    unsafeForBeginners: false,
    instructions: [
      "Hold a dumbbell at chest height",
      "Sit hips back and down",
      "Drive through heels to stand"
    ],
    targetMuscles: ["Quads", "Glutes"],
    mistakes: ["Knees caving inward", "Rounding back"],
    tips: ["Keep chest tall"]
  },
  {
    name: "Push-up",
    focus: ["Upper body", "Push", "Full body"],
    equipment: ["bodyweight"],
    sets: { beginner: 3, intermediate: 4, advanced: 5 },
    reps: { beginner: "8", intermediate: "12", advanced: "15" },
    rest: 45,
    unsafeForBeginners: false,
    instructions: [
      "Hands under shoulders",
      "Lower chest to floor",
      "Press back up"
    ],
    targetMuscles: ["Chest", "Triceps"],
    mistakes: ["Sagging hips", "Flared elbows"],
    tips: ["Keep core tight"]
  },
  {
    name: "Dumbbell row",
    focus: ["Pull", "Upper body"],
    equipment: ["dumbbells", "gym"],
    sets: { beginner: 3, intermediate: 4, advanced: 5 },
    reps: { beginner: "10", intermediate: "12", advanced: "12" },
    rest: 60,
    unsafeForBeginners: false,
    instructions: [
      "Support one knee on bench",
      "Pull dumbbell to ribcage",
      "Lower with control"
    ],
    targetMuscles: ["Back", "Biceps"],
    mistakes: ["Shrugging", "Twisting torso"],
    tips: ["Keep neck neutral"]
  },
  {
    name: "Plank",
    focus: ["Core", "Full body"],
    equipment: ["bodyweight"],
    sets: { beginner: 3, intermediate: 4, advanced: 4 },
    reps: { beginner: "30s", intermediate: "45s", advanced: "60s" },
    rest: 30,
    unsafeForBeginners: false,
    instructions: [
      "Elbows under shoulders",
      "Brace core and glutes",
      "Hold body in straight line"
    ],
    targetMuscles: ["Core"],
    mistakes: ["Hips dropping", "Holding breath"],
    tips: ["Think long spine"]
  },
  {
    name: "Bench press",
    focus: ["Push", "Upper body"],
    equipment: ["gym"],
    sets: { beginner: 3, intermediate: 4, advanced: 5 },
    reps: { beginner: "8", intermediate: "10", advanced: "8-10" },
    rest: 90,
    unsafeForBeginners: true,
    instructions: [
      "Feet planted on floor",
      "Lower bar to mid-chest",
      "Press up without locking elbows"
    ],
    targetMuscles: ["Chest", "Triceps"],
    mistakes: ["Bouncing bar", "Flaring elbows"],
    tips: ["Use a spotter"]
  },
  {
    name: "Romanian deadlift",
    focus: ["Lower body", "Legs"],
    equipment: ["gym", "dumbbells"],
    sets: { beginner: 3, intermediate: 4, advanced: 5 },
    reps: { beginner: "10", intermediate: "8-10", advanced: "8" },
    rest: 90,
    unsafeForBeginners: true,
    instructions: [
      "Hold weights at thighs",
      "Hinge hips back",
      "Keep back flat and stand tall"
    ],
    targetMuscles: ["Hamstrings", "Glutes"],
    mistakes: ["Rounding spine", "Bending knees too much"],
    tips: ["Keep weights close"]
  },
  {
    name: "Walking lunges",
    focus: ["Lower body", "Legs"],
    equipment: ["bodyweight", "dumbbells"],
    sets: { beginner: 3, intermediate: 4, advanced: 4 },
    reps: { beginner: "10 each", intermediate: "12 each", advanced: "14 each" },
    rest: 60,
    unsafeForBeginners: false,
    instructions: [
      "Step forward and lower",
      "Keep front knee over ankle",
      "Push through front heel"
    ],
    targetMuscles: ["Quads", "Glutes"],
    mistakes: ["Leaning forward", "Knee collapsing"],
    tips: ["Shorten stride if needed"]
  },
  {
    name: "Seated shoulder press",
    focus: ["Push", "Upper body"],
    equipment: ["dumbbells", "gym"],
    sets: { beginner: 3, intermediate: 4, advanced: 4 },
    reps: { beginner: "10", intermediate: "10-12", advanced: "8-10" },
    rest: 60,
    unsafeForBeginners: false,
    instructions: [
      "Press weights overhead",
      "Keep core braced",
      "Lower to ear level"
    ],
    targetMuscles: ["Shoulders", "Triceps"],
    mistakes: ["Arching back", "Flaring ribs"],
    tips: ["Sit tall"]
  },
  {
    name: "Glute bridge",
    focus: ["Lower body", "Full body"],
    equipment: ["bodyweight"],
    sets: { beginner: 3, intermediate: 4, advanced: 4 },
    reps: { beginner: "12", intermediate: "15", advanced: "15" },
    rest: 45,
    unsafeForBeginners: false,
    instructions: [
      "Lie on back, knees bent",
      "Drive hips up",
      "Squeeze glutes at top"
    ],
    targetMuscles: ["Glutes", "Hamstrings"],
    mistakes: ["Overarching", "Pushing through toes"],
    tips: ["Keep ribs down"]
  },
  {
    name: "Lat pulldown",
    focus: ["Pull", "Upper body"],
    equipment: ["gym"],
    sets: { beginner: 3, intermediate: 4, advanced: 4 },
    reps: { beginner: "10", intermediate: "12", advanced: "10-12" },
    rest: 60,
    unsafeForBeginners: false,
    instructions: [
      "Grip bar slightly wider than shoulders",
      "Pull bar to upper chest",
      "Control the return"
    ],
    targetMuscles: ["Lats", "Biceps"],
    mistakes: ["Leaning back too far", "Shrugging"],
    tips: ["Keep chest lifted"]
  }
];

module.exports = { exercises };

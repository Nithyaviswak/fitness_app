const meals = [
  {
    name: "Paneer bhurji with roti",
    diet: ["vegetarian"],
    allergens: ["dairy"],
    calories: 420,
    protein: 26,
    carbs: 40,
    fats: 18,
    portionSize: "2 rotis + 1 cup paneer bhurji",
    ingredients: ["paneer", "onion", "tomato", "spices", "whole wheat roti"],
    prepSteps: [
      "Saute onion and tomato with spices",
      "Add crumbled paneer and cook for 4-5 minutes",
      "Serve with warm rotis"
    ],
    tips: ["Add capsicum for volume"],
    benefits: ["High protein", "Balanced carbs"],
    bestTime: "Lunch"
  },
  {
    name: "Moong dal khichdi",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 360,
    protein: 16,
    carbs: 55,
    fats: 8,
    portionSize: "1.5 cups",
    ingredients: ["moong dal", "rice", "ghee or oil", "spices"],
    prepSteps: [
      "Pressure cook dal and rice with spices",
      "Finish with ghee or oil"
    ],
    tips: ["Add mixed vegetables"],
    benefits: ["Easy to digest", "Comforting meal"],
    bestTime: "Dinner"
  },
  {
    name: "Oats with nuts and banana",
    diet: ["vegetarian", "vegan"],
    allergens: ["nuts"],
    calories: 320,
    protein: 12,
    carbs: 52,
    fats: 10,
    portionSize: "1 bowl",
    ingredients: ["oats", "banana", "almonds", "milk or soy milk"],
    prepSteps: [
      "Cook oats in milk",
      "Top with banana slices and nuts"
    ],
    tips: ["Add cinnamon"],
    benefits: ["Slow-release carbs"],
    bestTime: "Breakfast"
  },
  {
    name: "Chicken curry with rice",
    diet: ["non_vegetarian"],
    allergens: [],
    calories: 480,
    protein: 32,
    carbs: 50,
    fats: 16,
    portionSize: "1 cup curry + 1 cup rice",
    ingredients: ["chicken", "tomato", "onion", "spices", "rice"],
    prepSteps: [
      "Cook chicken with spices and tomato",
      "Serve with steamed rice"
    ],
    tips: ["Use lean chicken"],
    benefits: ["High protein", "Iron rich"],
    bestTime: "Lunch"
  },
  {
    name: "Egg bhurji with toast",
    diet: ["non_vegetarian"],
    allergens: ["eggs"],
    calories: 300,
    protein: 20,
    carbs: 22,
    fats: 14,
    portionSize: "2 eggs + 2 toast",
    ingredients: ["eggs", "onion", "tomato", "spices", "whole wheat toast"],
    prepSteps: [
      "Scramble eggs with onions and tomatoes",
      "Serve with toast"
    ],
    tips: ["Add spinach for micronutrients"],
    benefits: ["Quick protein"],
    bestTime: "Breakfast"
  },
  {
    name: "Chana salad bowl",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 350,
    protein: 18,
    carbs: 52,
    fats: 8,
    portionSize: "1 bowl",
    ingredients: ["chickpeas", "cucumber", "tomato", "lemon", "spices"],
    prepSteps: [
      "Mix boiled chana with chopped veggies",
      "Season with lemon and spices"
    ],
    tips: ["Add olive oil for healthy fats"],
    benefits: ["Fiber rich"],
    bestTime: "Snack"
  },
  {
    name: "Fish curry with rice",
    diet: ["non_vegetarian"],
    allergens: ["fish"],
    calories: 430,
    protein: 30,
    carbs: 48,
    fats: 12,
    portionSize: "1 cup curry + 1 cup rice",
    ingredients: ["fish", "onion", "tomato", "spices", "rice"],
    prepSteps: [
      "Cook fish with spices and tomato",
      "Serve with steamed rice"
    ],
    tips: ["Choose low-oil gravy"],
    benefits: ["Omega-3 fats"],
    bestTime: "Dinner"
  },
  {
    name: "Tofu stir-fry with roti",
    diet: ["vegan"],
    allergens: ["soy"],
    calories: 380,
    protein: 20,
    carbs: 45,
    fats: 12,
    portionSize: "2 rotis + 1 cup tofu stir-fry",
    ingredients: ["tofu", "capsicum", "onion", "spices", "whole wheat roti"],
    prepSteps: [
      "Stir-fry tofu with vegetables",
      "Serve with rotis"
    ],
    tips: ["Use sesame seeds"],
    benefits: ["Plant protein"],
    bestTime: "Lunch"
  },
  {
    name: "Curd with fruit and nuts",
    diet: ["vegetarian"],
    allergens: ["dairy", "nuts"],
    calories: 250,
    protein: 12,
    carbs: 28,
    fats: 10,
    portionSize: "1 bowl",
    ingredients: ["curd", "apple", "almonds"],
    prepSteps: [
      "Mix curd with chopped fruit",
      "Top with nuts"
    ],
    tips: ["Use unsweetened curd"],
    benefits: ["Gut friendly"],
    bestTime: "Snack",
    cooling: true
  },
  {
    name: "Vegetable poha with peanuts",
    diet: ["vegetarian", "vegan"],
    allergens: ["nuts"],
    calories: 320,
    protein: 10,
    carbs: 50,
    fats: 9,
    portionSize: "1 bowl",
    ingredients: ["poha", "peas", "carrot", "onion", "peanuts", "spices"],
    prepSteps: [
      "Rinse poha and drain",
      "Saute veggies, add poha and spices",
      "Finish with lemon and peanuts"
    ],
    tips: ["Add sprouts for extra protein"],
    benefits: ["Light breakfast", "Good carbs"],
    bestTime: "Breakfast",
    cooling: false
  },
  {
    name: "Idli with sambar",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 340,
    protein: 12,
    carbs: 60,
    fats: 6,
    portionSize: "3 idlis + 1 cup sambar",
    ingredients: ["idli batter", "toor dal", "vegetables", "spices"],
    prepSteps: [
      "Steam idlis",
      "Prepare sambar with dal and vegetables"
    ],
    tips: ["Use less oil in sambar"],
    benefits: ["Easy to digest"],
    bestTime: "Breakfast",
    cooling: true
  },
  {
    name: "Vegetable upma",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 300,
    protein: 9,
    carbs: 48,
    fats: 8,
    portionSize: "1 bowl",
    ingredients: ["suji", "carrot", "beans", "peas", "spices"],
    prepSteps: [
      "Dry roast suji",
      "Cook veggies, add water and suji",
      "Stir until fluffy"
    ],
    tips: ["Add lemon for freshness"],
    benefits: ["Steady energy"],
    bestTime: "Breakfast",
    cooling: false
  },
  {
    name: "Masoor dal with brown rice",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 410,
    protein: 18,
    carbs: 65,
    fats: 7,
    portionSize: "1 cup dal + 1 cup rice",
    ingredients: ["masoor dal", "brown rice", "spices", "tomato"],
    prepSteps: [
      "Cook dal with spices",
      "Serve with brown rice"
    ],
    tips: ["Add coriander on top"],
    benefits: ["Iron rich"],
    bestTime: "Lunch",
    cooling: true
  },
  {
    name: "Rajma with jeera rice",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 460,
    protein: 20,
    carbs: 70,
    fats: 8,
    portionSize: "1 cup rajma + 1 cup rice",
    ingredients: ["rajma", "rice", "onion", "tomato", "spices"],
    prepSteps: [
      "Cook rajma until soft",
      "Simmer with spices and tomato",
      "Serve with jeera rice"
    ],
    tips: ["Soak rajma overnight"],
    benefits: ["High fiber"],
    bestTime: "Lunch",
    cooling: false
  },
  {
    name: "Paneer tikka with salad",
    diet: ["vegetarian"],
    allergens: ["dairy"],
    calories: 380,
    protein: 28,
    carbs: 18,
    fats: 20,
    portionSize: "150g paneer + salad",
    ingredients: ["paneer", "curd", "spices", "capsicum", "onion"],
    prepSteps: [
      "Marinate paneer with spices and curd",
      "Grill with veggies"
    ],
    tips: ["Use less oil, grill or air-fry"],
    benefits: ["High protein"],
    bestTime: "Dinner",
    cooling: false
  },
  {
    name: "Mixed veg curry with roti",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 390,
    protein: 12,
    carbs: 58,
    fats: 10,
    portionSize: "2 rotis + 1 cup curry",
    ingredients: ["mixed vegetables", "onion", "tomato", "spices", "roti"],
    prepSteps: [
      "Cook veggies with spices",
      "Serve with rotis"
    ],
    tips: ["Add spinach for micronutrients"],
    benefits: ["Vitamin rich"],
    bestTime: "Dinner",
    cooling: false
  },
  {
    name: "Lauki chana dal with roti",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 360,
    protein: 16,
    carbs: 52,
    fats: 8,
    portionSize: "2 rotis + 1 cup lauki dal",
    ingredients: ["lauki", "chana dal", "spices", "roti"],
    prepSteps: [
      "Pressure cook lauki and dal",
      "Temper with spices"
    ],
    tips: ["Keep it lightly spiced"],
    benefits: ["Cooling for body heat"],
    bestTime: "Dinner",
    cooling: true
  },
  {
    name: "Vegetable pulao with raita",
    diet: ["vegetarian"],
    allergens: ["dairy"],
    calories: 420,
    protein: 14,
    carbs: 62,
    fats: 12,
    portionSize: "1.5 cups",
    ingredients: ["rice", "mixed vegetables", "spices", "curd"],
    prepSteps: [
      "Cook pulao with vegetables",
      "Serve with raita"
    ],
    tips: ["Use brown rice if preferred"],
    benefits: ["Balanced meal"],
    bestTime: "Lunch",
    cooling: true
  },
  {
    name: "Grilled chicken with veggies",
    diet: ["non_vegetarian"],
    allergens: [],
    calories: 380,
    protein: 35,
    carbs: 18,
    fats: 15,
    portionSize: "150g chicken + veggies",
    ingredients: ["chicken breast", "capsicum", "zucchini", "spices"],
    prepSteps: [
      "Marinate chicken with spices",
      "Grill with veggies"
    ],
    tips: ["Pair with lemon and herbs"],
    benefits: ["Lean protein"],
    bestTime: "Dinner",
    cooling: false
  },
  {
    name: "Egg curry with roti",
    diet: ["non_vegetarian"],
    allergens: ["eggs"],
    calories: 360,
    protein: 22,
    carbs: 35,
    fats: 14,
    portionSize: "2 eggs + 2 rotis",
    ingredients: ["eggs", "onion", "tomato", "spices", "roti"],
    prepSteps: [
      "Boil eggs and prepare curry",
      "Serve with rotis"
    ],
    tips: ["Keep oil minimal"],
    benefits: ["Quick protein"],
    bestTime: "Lunch",
    cooling: false
  },
  {
    name: "Curd rice with cucumber",
    diet: ["vegetarian"],
    allergens: ["dairy"],
    calories: 340,
    protein: 10,
    carbs: 52,
    fats: 9,
    portionSize: "1.5 cups",
    ingredients: ["rice", "curd", "cucumber", "spices"],
    prepSteps: [
      "Mix cooked rice with curd",
      "Add cucumber and tempering"
    ],
    tips: ["Add pomegranate for freshness"],
    benefits: ["Cooling for body heat"],
    bestTime: "Lunch",
    cooling: true
  },
  {
    name: "Fruit chaat",
    diet: ["vegetarian", "vegan"],
    allergens: [],
    calories: 180,
    protein: 3,
    carbs: 40,
    fats: 2,
    portionSize: "1 bowl",
    ingredients: ["apple", "papaya", "banana", "lemon", "spices"],
    prepSteps: [
      "Chop fruits",
      "Toss with lemon"
    ],
    tips: ["Skip extra sugar"],
    benefits: ["Cooling hydration"],
    bestTime: "Snack",
    cooling: true
  },
  {
    name: "Buttermilk with roasted chana",
    diet: ["vegetarian"],
    allergens: ["dairy"],
    calories: 160,
    protein: 8,
    carbs: 20,
    fats: 3,
    portionSize: "1 glass + 30g chana",
    ingredients: ["buttermilk", "roasted chana", "spices"],
    prepSteps: [
      "Season buttermilk",
      "Serve with roasted chana"
    ],
    tips: ["Great post-workout cooling option"],
    benefits: ["Cooling for body heat"],
    bestTime: "Snack",
    cooling: true
  }
];

module.exports = { meals };

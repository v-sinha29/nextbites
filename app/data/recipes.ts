export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add mozzarella.",
      "Bake hot until the crust blisters, then top with basil.",
    ],
  },
  {
    id: "paneer-tikka", title: "Paneer Tikka", emoji: "🧀",
    minutes: 40, difficulty: "Medium", cuisine: "Indian",
    ingredients: ["Paneer cubes", "Curd", "Tikka masala", "Capsicum and onion", "Lemon juice"],
    steps: [
      "Mix curd, masala and lemon into a marinade.",
      "Coat paneer and veggies, rest for 20 minutes.",
      "Skewer and grill until charred at the edges.",
    ],
  },
  {
    id: "pancakes", title: "Fluffy Pancakes", emoji: "🥞",
    minutes: 20, difficulty: "Easy", cuisine: "American",
    ingredients: ["Flour", "Milk", "Egg", "Sugar", "Baking powder", "Butter"],
    steps: [
      "Whisk everything into a smooth batter.",
      "Pour small rounds onto a hot buttered pan.",
      "Flip when bubbles appear, cook till golden.",
    ],
  },
  {
    id: "ramen", title: "Miso Ramen", emoji: "🍜",
    minutes: 50, difficulty: "Hard", cuisine: "Japanese",
    ingredients: ["Ramen noodles", "Miso paste", "Vegetable stock", "Boiled egg", "Spring onion"],
    steps: [
      "Heat the stock and whisk in the miso paste.",
      "Cook noodles separately and drain.",
      "Add noodles to a bowl, pour broth, top with egg and spring onion.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
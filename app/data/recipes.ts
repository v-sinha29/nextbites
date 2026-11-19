export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "paneer-tikka", title: "Paneer Tikka", emoji: "🧀", minutes: 40, difficulty: "Medium", cuisine: "Indian" },
  { id: "pancakes", title: "Fluffy Pancakes", emoji: "🥞", minutes: 20, difficulty: "Easy", cuisine: "American" },
  { id: "ramen", title: "Miso Ramen", emoji: "🍜", minutes: 50, difficulty: "Hard", cuisine: "Japanese" },
];
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Recipe not found 🍽️</h1>
      <p className="empty">This dish isn’t on our menu.</p>
      <Link href="/" className="back">← Back to all recipes</Link>
    </main>
  );
}
"use client";

export default function RecipeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h2>Something went wrong 😕</h2>
      <p className="empty">{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>
        An error occurred while loading the meals. Please try again later.
      </h1>
      <p>{error.message}</p>
    </main>
  );
}

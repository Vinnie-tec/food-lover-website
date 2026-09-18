"use client";

export default function Error({ error }) {
  return (
    <mai className="error">
      <h1>
        An error occurred while loading the meals. Please try again later.
      </h1>
      <p>{error}</p>
    </mai>
  );
}

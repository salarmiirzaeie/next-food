"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main>
      <h1>Meals Error</h1>
      <p>{error.message}</p>
    </main>
  );
}

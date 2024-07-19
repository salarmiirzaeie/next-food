import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">meal1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">meal2</Link>
      </p>
    </div>
  );
};

export default page;

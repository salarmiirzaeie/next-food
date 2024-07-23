import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsLoading from "../components/meals/loading-out";
async function Meals() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}
const page = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Deliciuous Meals </h1>{" "}
        <p>
          Choose your favorite meal from our broad selection of available meals.
          Everything is cooked with high-quality ingredients, just-in-time and
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your favorite Now</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default page;

"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const handleSubmitMeal = async (fomData: FormData) => {
  "use server";
  const meal = {
    title: fomData.get("title") as string,
    image: fomData.get("image") as string,
  };
  await saveMeal(meal);
  redirect("/meals");
};

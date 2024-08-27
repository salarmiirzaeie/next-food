"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(title: string) {
  return !title || title.length === 0;
}
export const handleSubmitMeal = async (prevState: any, fomData: FormData) => {
  const meal = {
    title: fomData.get("title") as string,
    image: fomData.get("image") as string,
  };

  if (isInvalidText(meal.title) || isInvalidText(meal.image)) {
    return {
      message: "Invalid meal",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};

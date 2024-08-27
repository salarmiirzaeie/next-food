import { getMealsById } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
export async function generateMetadata({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal: any = await getMealsById(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal?.title,
  };
}
const page = ({ params }: { params: { mealSlug: string } }) => {
  const meals: any = getMealsById(params.mealSlug);
  return (
    <div>
      <header>
        <h1>{meals?.title}</h1>
      </header>
      <main>
        <p>{meals?.id}</p>
        <Image src={meals?.image} alt={meals?.title} width={200} height={200} />
      </main>
    </div>
  );
};

export default page;

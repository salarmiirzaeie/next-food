import sql from "better-sqlite3";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
}
export function getMealsById(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE id = ?").get(slug);
}
export async function saveMeal(meal: any) {
  meal.title = xss(meal.title);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.id}.${extension}`;
  const writeStream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  writeStream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("saving image error");
    }
  });
  meal.image = `/images/${filename}`;
  db.prepare("INSERT INTO meals VALUES (@title, @image)").run(
    meal.title,
    meal.image
  );
}

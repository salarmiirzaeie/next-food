const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Meat",
    image: "/images/pasta.jpg",
    id: "1",
  },
  {
    title: "Fish",
    image: "/images/stam.jpg",
    id: "2",
  },
  {
    title: "Vegitables",
    image: "/images/bean.jpg",
    id: "3",
  },
  {
    title: "Fruits",
    image: "/images/stam.jpg",
    id: "4",
  },
  {
    title: "Grains",
    image: "/images/stam.jpg",
    id: "5",
  },
  {
    title: "Dairy",
    image: "/images/stam.jpg",
    id: "6",
  },
  {
    title: "Sweets",
    image: "/images/bean.jpg",
    id: "7",
  },
  {
    title: "Drinks",
    image: "/images/stam.jpg",
    id: "8",
  },
];
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL
  )
`
).run();

async function initDatabase() {
  const insert = db.prepare("INSERT INTO meals VALUES (null, @title, @image)");

  for (const meal of dummyMeals) {
    insert.run({ title: meal.title, image: meal.image });
  }
}
async function clearDatabase() {
  db.prepare("DELETE FROM meals").run();
}
initDatabase();

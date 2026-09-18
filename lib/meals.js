import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const query = db.prepare("SELECT * FROM meals");
  const meals = query.all();
  return meals;
}

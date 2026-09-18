import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const query = db.prepare("SELECT * FROM meals");
  const meals = query.all();
  return meals;
}

export function getMealBySlug(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const query = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = query.get(slug);
  return meal;
}

export async function addMeal(mealData) {
  mealData.slug = slugify(mealData.title, { lower: true });
  mealData.instructions = xss(mealData.instructions);

  const extension = mealData.image.name.split(".").pop();
  const imageFileName = `${mealData.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${imageFileName}`);
  const bufferedImage = await mealData.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save the image.");
    }
  });
  mealData.image = `/images/${imageFileName}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    mealData.title,
    mealData.summary,
    mealData.instructions,
    mealData.creator,
    mealData.creator_email,
    mealData.image,
    mealData.slug,
  );
  // OR
  // db.prepare(
  //   `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES 
  //    (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  // ).run(
  //   mealData
  // );
}

"use server";

import { redirect } from "next/navigation";
import { addMeal } from "./meals";

export async function shareMeal(formData) {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  await addMeal(mealData);
  redirect("/meals");
}

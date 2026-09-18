"use server";

import { redirect } from "next/navigation";
import { addMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidTextInput(input) {
  return typeof input !== "string" || input.trim().length === 0;
}

export async function shareMeal(prevState,formData) {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    isInvalidTextInput(mealData.title) ||
    isInvalidTextInput(mealData.summary) ||
    isInvalidTextInput(mealData.instructions) ||
    isInvalidTextInput(mealData.creator) ||
    isInvalidTextInput(mealData.creator_email) ||
    !mealData.creator_email.includes("@") ||
    !mealData.image ||
    mealData.image.size === 0
  ) {
    return {
      message: "Invalid input - please check your data.",
      status: 422,
    }
  }

  await addMeal(mealData);
  revalidatePath("/meals");
  redirect("/meals");
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { getMealBySlug } from "../../../../lib/meals";
import style from "./page.module.css";

export async function generateMetadata({ params }) {
  const { mealSlug } = await params;
  const meal = getMealBySlug(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealsDetailsPage = async ({ params }) => {
  const { mealSlug } = await params;
  const meal = getMealBySlug(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={style.headerText}>
          <h1>{meal.title}</h1>
          <p className={style.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}>{meal.summary}</p>
        </div>
      </header>
      <main
        className={style.instructions}
        dangerouslySetInnerHTML={{ __html: meal.instructions }}
      ></main>
    </>
  );
};

export default MealsDetailsPage;

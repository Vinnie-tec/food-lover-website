import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "../../../components/meals/meals-grid";
import { getAllMeals } from "../../../lib/meals";

const MealsPage = async () => {

  const meals = await getAllMeals();
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={style.cta}>
          <Link href="/meals/share">Explore Recipes</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;

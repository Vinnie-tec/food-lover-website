import { Suspense } from "react";

import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "../../../components/meals/meals-grid";
import { getAllMeals } from "../../../lib/meals";

async function Meals() {
  const meals = await getAllMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
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
      <main className={style.main}>
        <Suspense fallback={<p className={style.loading}>Loading Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

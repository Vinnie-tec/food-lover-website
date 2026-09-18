import style from "./page.module.css";

const MealsDetailsPage = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.image}>{/* <Image fill /> */}</div>
        <div className={style.headerText}>
          <h1>Meal Title</h1>
          <p className={style.creator}>
            by <a href={`mailto:${"chefEmail"}`}>Chef Name</a>
          </p>
          <p className={style.summary}>Brief description of the meal.</p>
        </div>
      </header>
      <main
        className={style.instructions}
        dangerouslySetInnerHTML={{ __html: "... " }}
      ></main>
    </>
  );
};

export default MealsDetailsPage;

import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Link className={styles.link} href="/meals/share">
        Share a Meal
      </Link>
      <Link className={styles.link} href="/community">
        Community
      </Link>
    </main>
  );
}

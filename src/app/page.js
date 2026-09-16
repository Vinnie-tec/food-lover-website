import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>
          Hello there! Welcome to our food lover community! We are passionate
          about sharing delicious recipes, cooking tips, and culinary
          adventures. Join us on this flavorful journey and let&apos;s explore
          the world of food together!
        </p>
        <p>
          <Link href="/about">Learn more about us</Link>
        </p>
      </main>
    </div>
  );
}

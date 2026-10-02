import RubberDucky from "./components/rubber-ducky";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <RubberDucky />
    </main>
  );
}

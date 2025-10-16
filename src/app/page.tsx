import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      Oi, tudo bem?
      <p>Welcome to my Next.js application!</p>
    </div>
  );
}

import Link from "next/link";
import styles from "@/app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Página não encontrada</h1>
      <p>Não encontramos a página que tentou acessar.</p>
      <Link className={styles.link} href="/">
        <div className={styles.linkContainer}>Retorne ao Início</div>
      </Link>
    </div>
  );
}

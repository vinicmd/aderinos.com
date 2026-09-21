import styles from "@/components/cover/cover.module.css";
import Image from "next/image";
import CoverageForm from "./coverageForm";

export default function CoverArea() {
  return (
    <section className={styles.heroSection}>
      <Image
        loading="eager"
        className={styles.image}
        src={"/assets/background.avif"}
        alt="background image"
        fetchPriority="high"
        priority
        width={1920}
        height={600}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.mainTitle}>
          Aderir Pacotes de <br className={styles.desktopBreak} /> Internet NOS
        </h1>
        <h2 className={styles.subTitle}>TV NET VOZ</h2>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Verificar cobertura NOS</h3>
          <CoverageForm />
        </div>
      </div>
    </section>
  );
}

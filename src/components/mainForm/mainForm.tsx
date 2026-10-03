"use client";
import Image from "next/image";
import { SendForm } from "@/components/coverageModal/action";
import styles from "@/components/mainForm/mainForm.module.css";
import { showNOSName } from "@/util/showNOSName";

export const MainForm = () => {
  return (
    <section className={styles.main}>
      <article>
        <h3 className={styles.title}>Fale com um operador especializado</h3>
      </article>
      <SendForm />
      <div className={styles.imagecontainer}>
        <Image
          src={`${showNOSName ? "/assets/logo.svg" : "/assets/logo.png"}`}
          loading="eager"
          className={styles.logo}
          alt="Logo"
          width={178}
          height={96}
        />
      </div>
    </section>
  );
};

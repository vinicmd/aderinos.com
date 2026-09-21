"use client";
import Image from "next/image";
import { SendForm } from "../coverageModal/action";
import styles from "@/components/mainForm/mainForm.module.css";

export const MainForm = () => {
  return (
    <section className={styles.main}>
      <article>
        <h3 className={styles.title}>Fale com um operador especializado</h3>
      </article>
      <SendForm />
      <div className={styles.imagecontainer}>
        <Image
          src={"/assets/logo.svg"}
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

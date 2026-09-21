import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { MainForm } from "@/components/mainForm/mainForm";
import styles from "@/app/aderir/page.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <MainForm />
      </main>
      <Footer />
    </div>
  );
}

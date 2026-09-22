import Image from "next/image";
import Link from "next/link";
import styles from "@/components/header/header.module.css";
import { Phone } from "@/components/phone/phone";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Link href="/">
            <Image
              src={"/assets/logo.svg"}
              loading="eager"
              className={styles.logo}
              alt="Logo"
              width={80}
              height={45}
            />
          </Link>
          <Phone />
        </div>
      </div>
    </header>
  );
};

import styles from "@/components/call-free/call-free.module.css";
import Image from "next/image";
import Person from "@/components/call-free/person.png";
import Link from "next/link";

export const CallFree = () => {
  return (
    <Link href={"/aderir"} prefetch={false}>
      <div className={styles.fixedFooter}>
        <div className={styles.profileImage}>
          <Image className={styles.person} src={Person} alt="Person" />
        </div>
        <div className={styles.footerContent}>
          <p>Quer aderir? Ligamos grátis</p>
        </div>
      </div>
    </Link>
  );
};

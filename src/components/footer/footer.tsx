import styles from "@/components/footer/footer.module.css";
import { CONSTANTS } from "@/util/constants";
import Link from "next/link";
export const Footer = () => {
  const showFooter = false;
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.policy}>
          <p>
            &copy; {CONSTANTS.year} Aderir Pacotes | Todos os direitos
            reservados
          </p>
          <Link prefetch={false} href="/sobre-nos">
            Sobre Nós
          </Link>
          <div>
            <Link prefetch={false} href="/politica-de-privacidade">
              Politica de Privacidade
            </Link>
            {" | "}
            <Link prefetch={false} href="/termos-de-uso">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

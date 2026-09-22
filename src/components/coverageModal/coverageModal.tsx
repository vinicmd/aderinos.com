import styles from "@/components/coverageModal/coverageModal.module.css";
import { SendForm } from "@/components/coverageModal/action";
import { Plan } from "@/util/protocols/plan";

interface CoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: Plan;
  disponibility?: boolean;
  postal?: string;
}

export function CoverageModal({
  isOpen,
  onClose,
  plan,
  disponibility = false,
  postal = "",
}: CoverageModalProps) {
  if (!isOpen) return null;

  const price = Number(plan?.price);
  const [integerPart, decimalPart] = price.toFixed(2).split(".");
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
          >
            ✕
          </button>
          <h2 className={styles.title}>
            {disponibility
              ? "Já temos fibra NOS na sua zona"
              : "Liguem-me grátis"}
          </h2>
          {plan && (
            <div className={styles.greybox}>
              <h2 className={styles.planTitle}>{plan?.name}</h2>
              <div className={styles.currentPriceContainer}>
                <span className={styles.currencySymbol}>€</span>
                <span className={styles.integerPart}>{integerPart}</span>
                <div className={styles.decimalsContainer}>
                  <span className={styles.decimalPart}>,{decimalPart}</span>
                  <span className={styles.monthLabel}>/mês</span>
                </div>
              </div>
              {plan?.feature?.map((text, index) => (
                <p key={index} className={styles.feature}>
                  {text}
                </p>
              ))}
            </div>
          )}
          <p className={styles.subtitle}>
            Deixe o seu contacto e confirmamos as ofertas disponíveis na sua
            morada.
          </p>
        </div>

        <SendForm plan={plan} postal={postal} />
      </div>
    </div>
  );
}

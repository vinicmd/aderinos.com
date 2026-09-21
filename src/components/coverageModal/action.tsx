import { SendTelegramMessage } from "@/services/send-message-telegram";
import { redirect } from "next/navigation";
import styles from "@/components/coverageModal/coverageModal.module.css";
import { Plan } from "@/util/protocols/plan";

export const SendForm = ({
  plan = {
    name: "",
    details: "",
    feature: [],
    offer: "",
    price: "",
  },
  postal,
}: {
  plan?: Plan;
  postal?: string;
}) => {
  async function handleSubmit(formData: FormData) {
    const name = formData.get("name");
    const telephone = formData.get("telephone");

    await SendTelegramMessage({
      name: String(name),
      telephone: String(telephone),
      plan,
      postal,
    });

    formData.set("", "");

    redirect("/obrigado");
  }
  return (
    <form className={styles.body} action={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nome
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={styles.input}
          placeholder="O seu nome"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="telephone" className={styles.label}>
          Telemóvel
        </label>
        <input
          type="tel"
          inputMode="tel"
          name="telephone"
          id="telephone"
          minLength={9}
          className={styles.input}
          placeholder="+351 "
          maxLength={14}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Liguem-me grátis
      </button>

      <p className={styles.legalText}>
        Ao enviar, autoriza o contacto telefónico para apresentação de ofertas,
        nos termos da Política de Privacidade.
      </p>
    </form>
  );
};

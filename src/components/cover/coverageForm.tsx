"use client";

import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";
import styles from "@/components/cover/cover.module.css";

const CoverageModal = dynamic(
  () =>
    import("@/components/coverageModal/coverageModal").then(
      (mod) => mod.CoverageModal,
    ),
  { ssr: false },
);

export default function CoverageForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postal, setPostal] = useState("");

  const handlePostalChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    let value = event.target.value.replace(/\D/g, "");

    if (value.length > 4) {
      value = value.replace(/^(\d{4})(\d)/, "$1-$2");
    }

    setPostal(value);
  };
  return (
    <div className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type="tel"
          inputMode="tel"
          name="postalCode"
          value={postal}
          onChange={handlePostalChange}
          placeholder="Código Postal"
          className={styles.input}
          maxLength={8}
          minLength={8}
        />
      </div>

      <span className={styles.hint}>
        Introduza um código postal válido (0000-000)
      </span>

      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className={styles.submitButton}
      >
        Verificar
      </button>

      {isModalOpen && (
        <CoverageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          disponibility
          postal={postal}
        />
      )}
    </div>
  );
}

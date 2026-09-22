"use client";

import { useState } from "react";
import styles from "@/components/packageCard/packageCard.module.css";
import { CoverageModal } from "@/components/coverageModal/coverageModal";

interface ServiceFeature {
  badgeLabel: string;
  badgeColor: string;
  highlight: string;
  detail: string;
}

interface OfferOption {
  id: string;
  label: string;
  discountPerMonth?: number;
  descriptionText: string;
}

export interface PackageCardProps {
  name: string;
  basePrice: number;
  ctaText?: string;
  features: ServiceFeature[];
  offers: OfferOption[];
  onSelectPlan?: (offerId: string) => void;
}

export function PackageCard({
  name,
  basePrice,
  ctaText = "Liguem-me grátis",
  features,
  offers,
  onSelectPlan,
}: PackageCardProps) {
  const [selectedOfferId, setSelectedOfferId] = useState<string>(
    offers[0]?.id ?? "",
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const allFeaturesDetails = features.map(
    (feature) =>
      `${feature.badgeLabel}: ${feature.highlight} ${feature.detail}`,
  );

  const activeOffer =
    offers.find((offer) => offer.id === selectedOfferId) ?? offers[0];
  const finalPrice = basePrice - (activeOffer?.discountPerMonth ?? 0);

  const [integerPart, decimalPart] = finalPrice.toFixed(2).split(".");
  const [baseInteger, baseDecimal] = basePrice.toFixed(2).split(".");
  const hasDiscount = (activeOffer?.discountPerMonth ?? 0) > 0;

  return (
    <article className={styles.card}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>{name}</h2>

        <div className={styles.priceArea}>
          {hasDiscount ? (
            <p className={styles.originalPrice}>
              €{baseInteger},{baseDecimal}
            </p>
          ) : (
            <p className={styles.emptyPriceSpace}>_</p>
          )}

          <div className={styles.currentPriceContainer}>
            <span className={styles.currencySymbol}>€</span>
            <span className={styles.integerPart}>{integerPart}</span>
            <div className={styles.decimalsContainer}>
              <span className={styles.decimalPart}>,{decimalPart}</span>
              <span className={styles.monthLabel}>mês</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpenModal(!openModal)}
          className={styles.ctaButton}
        >
          {ctaText}
        </button>

        <div className={styles.featuresGrid}>
          {features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className={styles.featureItem}>
              <span
                className={styles.badge}
                style={{ backgroundColor: feat.badgeColor }}
              >
                {feat.badgeLabel}
              </span>
              <p className={styles.featureHighlight}>{feat.highlight}</p>
              <p className={styles.featureDetail}>{feat.detail}</p>
            </div>
          ))}
        </div>

        {features[3] && (
          <div className={styles.fourthFeature}>
            <span
              className={styles.badge}
              style={{ backgroundColor: features[3].badgeColor }}
            >
              {features[3].badgeLabel}
            </span>
            <p className={styles.featureHighlight}>{features[3].highlight}</p>
            <p className={styles.featureDetail}>{features[3].detail}</p>
          </div>
        )}
      </div>

      <div className={styles.bottomSection}>
        <div>
          <h3 className={styles.offersTitle}>Ofertas de adesão</h3>

          <div className={styles.offersList}>
            {offers.map((offer) => {
              const isSelected = offer.id === selectedOfferId;
              return (
                <button
                  key={offer.id}
                  type="button"
                  onClick={() => setSelectedOfferId(offer.id)}
                  className={`${styles.offerButton} ${
                    isSelected
                      ? styles.offerButtonActive
                      : styles.offerButtonInactive
                  }`}
                >
                  {offer.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.summaryArea}>
          <p className={styles.descriptionText}>
            {activeOffer?.descriptionText}
          </p>
          <p className={styles.legalText}>
            Ofertas de adesão, se selecionadas, mediante pagamento por débito
            direto e ativação da fatura eletrónica.
          </p>
        </div>
      </div>
      <CoverageModal
        isOpen={openModal}
        onClose={() => setOpenModal(!openModal)}
        plan={{
          name,
          price: String(finalPrice),
          details: activeOffer?.descriptionText,
          offer:
            offers.find((offer) => offer.id === selectedOfferId)?.label || "",
          feature: allFeaturesDetails,
        }}
      />
    </article>
  );
}

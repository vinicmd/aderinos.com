declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const triggerConversion = (transactionId?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11027087416/LlFlCMr4lfIbELiAkIop",
      value: 1.0,
      currency: "EUR",
      transaction_id: transactionId || crypto.randomUUID(),
    });
  } else {
    console.warn("Google Ads Tag não carregada ainda.");
  }
};

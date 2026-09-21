export interface Offer {
  name: string;
  lastPrice: string | undefined;
  price: string;
  description: string;
  offerText: string | undefined;
  benefices: string | undefined;
  promo?: string | undefined;
}

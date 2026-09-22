import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { CONSTANTS } from "@/util/constants";

const AzoSansRegular = localFont({
  src: "./AzoSans-Regular.woff2",
});

const description = `Aderir Pacotes de Internet NOS - TV Net Voz - ao melhor preço. Na adesão a qualquer pacote de internet NOS escolha a oferta da TV ou Telemóvel ou Tablet. Instalação em 24h/48h.`;
const title = "Aderir Pacotes de Internet";
const url = CONSTANTS.url;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  keywords: [
    "pacote nos",
    "aderir nos",
    "internet nos",
    "adesão nos",
    "nos tv",
    "NOS",
    "NOS INTERNET",
    "nos tv net voz",
  ],
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: url,
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-pt">
      <body className={`${AzoSansRegular.className}`}>{children}</body>
    </html>
  );
}

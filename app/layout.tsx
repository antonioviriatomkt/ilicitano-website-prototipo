import type { Metadata } from "next";
import { Jost, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

/**
 * Two sans, two jobs. Manrope Light carries the headline voice; Jost — close
 * to the Avenir the brand already uses in print — carries every piece of
 * information and interface. Both are self-hosted by next/font, so there is
 * no third-party request and no flash of fallback text.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ilicitano.pt"),
  title: {
    default: "ILICITANO — Promoção imobiliária, engenharia e construção",
    template: "%s · ILICITANO",
  },
  description:
    "Empreendimentos residenciais em Alcanena, Fátima, Leiria e Lisboa, e obra chave na mão. A construir desde 2008.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "ILICITANO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${jost.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only">
          Saltar para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

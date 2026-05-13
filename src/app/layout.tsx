import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capellaops.com"),
  title: {
    default: "Capella Ops | Sistema operativo para inventario, ventas y operaciones",
    template: "%s | Capella Ops"
  },
  description:
    "Landing comercial de Capella Ops, plataforma SaaS para controlar inventario, POS, CRM, compras, proyectos y reportes desde un solo sistema.",
  keywords: [
    "Capella Ops",
    "inventario",
    "POS",
    "CRM",
    "compras",
    "proyectos",
    "SaaS empresarial",
    "software de operaciones"
  ],
  openGraph: {
    title: "Capella Ops",
    description:
      "El sistema operativo para controlar inventario, ventas y operaciones desde una sola plataforma.",
    url: "https://capellaops.com",
    siteName: "Capella Ops",
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Capella Ops",
    description:
      "Inventario, POS, clientes, compras y proyectos en una sola plataforma diseñada para negocios con operación real."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <div className="relative min-h-screen">
          <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-[radial-gradient(circle_at_center,_rgba(27,138,90,0.18),_transparent_56%)]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

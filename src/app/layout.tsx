import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // sesuaikan kebutuhan
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daihatsu Indonesia - Sahabat Keluarga, Pilihan Tepat",
  description:
    "Temukan mobil Daihatsu berkualitas dengan harga terjangkau. Dari Ayla hingga Terios, temukan mobil impian Anda untuk keluarga Indonesia.",
  verification: {
    google: "0wQhv2sPOsMC02vZzMhU99KHgDTNjI9X3ga6elGIx0M",
  },
  keywords: [
    "Daihatsu",
    "mobil",
    "otomotif",
    "Indonesia",
    "Ayla",
    "Xenia",
    "Terios",
    "Sigra",
    "Rocky",
    "Gran Max",
  ],
  authors: [{ name: "Daihatsu Indonesia" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daihatsu Indonesia - Sahabat Keluarga, Pilihan Tepat",
    description:
      "Temukan mobil Daihatsu berkualitas dengan harga terjangkau untuk keluarga Indonesia",
    url: "https://promodaihatsu.vercel.app",
    siteName: "Daihatsu Indonesia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daihatsu Indonesia - Sahabat Keluarga, Pilihan Tepat",
    description:
      "Temukan mobil Daihatsu berkualitas dengan harga terjangkau untuk keluarga Indonesia",
  },
};

export function ClientLayout({ children }) {
  return <div className={roboto.className}>{children}</div>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={roboto.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

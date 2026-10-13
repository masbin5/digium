import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIGIUM — Bantu Usaha Lokal Naik Kelas",
  description:
    "DIGIUM membantu UMKM tampil lebih profesional lewat website, katalog digital, menu QR, dan desain media sosial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}

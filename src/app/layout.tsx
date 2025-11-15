import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Temporada K",
  description:
    "Landing del podcast Temporada K: conversaciones, aprendizajes y energía para la semana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-zinc-100`}
      >
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/background.webp')" }}
        >
          {/* overlay oscuro para que todo sea legible */}
          <div className="min-h-screen bg-black/80">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

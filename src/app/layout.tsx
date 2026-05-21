import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import { HOTEL } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${HOTEL.name} | Luxury Hotel in Karu, Nasarawa`,
  description:
    "Lewis Garden and Suites — premium luxury hotel in Karu, Nasarawa, Nigeria. Elegant rooms, world-class amenities, near Bingham University and Goshen City. Enquire via WhatsApp.",
  keywords: [
    "Lewis Garden and Suites",
    "luxury hotel Karu",
    "hotel Nasarawa Nigeria",
    "Bingham University hotel",
    "Goshen City accommodation",
  ],
  openGraph: {
    title: HOTEL.name,
    description: HOTEL.tagline,
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}

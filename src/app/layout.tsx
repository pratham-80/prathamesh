import type { Metadata } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./(site)/components/Navbar";
import Footer from "./(site)/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathamesh Ingale",
  description: "Personal portfolio",
  icons: {
    icon: '/apple-icon.png',
    shortcut: '/apple-icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSerifDisplay.variable} antialiased`}>        
        <Navbar />
        <main className="pt-24">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}

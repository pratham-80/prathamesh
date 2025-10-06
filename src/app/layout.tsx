import type { Metadata } from "next";
import { Roboto_Flex, Inter, Poller_One } from "next/font/google";
import "./globals.css";
import "./safari-fixes.css";
import dynamic from "next/dynamic";
import Footer from "./(site)/components/Footer";
import CustomCursor from "./(site)/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

// Lazy load components for better performance
const Navbar = dynamic(() => import("./(site)/components/Navbar"), {
  loading: () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="h-8 bg-gray-200 animate-pulse rounded w-32"></div>
      </div>
    </div>
  ),
  ssr: true
});


const robotoFlex = Roboto_Flex({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const pollerOne = Poller_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoFlex.variable} ${pollerOne.variable} antialiased`}>        
        <Navbar />
        <CustomCursor />
        <main className="pt-28">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}

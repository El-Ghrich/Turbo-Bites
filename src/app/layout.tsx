import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import {Footer} from "@/components/footer";


export const metadata: Metadata = {
  title: {
    default: "Turbo Burger | Fuel Your Hunger",
    template: "%s | Turbo Burger" // This allows sub-pages to look like "Menu | Turbo Burger"
  },
  description: "The most aggressive fast food in Tangier. Fresh ingredients, high speed delivery. 15 minutes or it's free.",
  keywords: ["burgers", "fast food", "tangier", "delivery", "turbo"],
  
  // This controls how it looks when shared on WhatsApp/Twitter/LinkedIn
  openGraph: {
    title: "Turbo Burger | Fuel Your Hunger",
    description: "Don't starve. Eat fast.",
    //url: "https://turboburger.ma", // Put your real domain here
    siteName: "Turbo Burger",
    images: [
      {
        url: "/logo.png", // You need to add this image to your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      <Footer />
      </body>
    </html>
  );
}

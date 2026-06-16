import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://middleeastchef.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Middle East Chef — Premium Meat Distribution",
    template: "%s | Middle East Chef",
  },
  description:
    "Middle East Chef is a premium meat distributor supplying beef, lamb, poultry and more to restaurants, retailers, and wholesalers with reliable cold-chain delivery.",
  keywords: [
    "meat distributor",
    "meat supplier",
    "wholesale meat",
    "beef",
    "lamb",
    "poultry",
    "Middle East Chef",
  ],
  openGraph: {
    title: "Middle East Chef — Premium Meat Distribution",
    description:
      "Premium meat distribution you can trust — quality cuts and reliable cold-chain delivery.",
    url: siteUrl,
    siteName: "Middle East Chef",
    images: ["/logo.png"],
    type: "website",
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

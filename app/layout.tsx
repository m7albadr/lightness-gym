import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightness Gym — Ladies Fitness in Kuwait",
  description:
    "Kuwait's premier ladies-only fitness destination. Tailored programs, expert trainers, and a supportive community — all designed for you.",
  keywords: [
    "ladies gym Kuwait",
    "women fitness Kuwait",
    "نادي رياضي للسيدات",
    "لايتنس جيم",
    "Lightness Gym",
    "gym Abu Halifah",
    "personal training Kuwait",
    "yoga Kuwait",
    "zumba Kuwait",
  ],
  authors: [{ name: "Lightness Gym" }],
  openGraph: {
    title: "Lightness Gym — Ladies Fitness in Kuwait",
    description:
      "Kuwait's premier ladies-only fitness destination. Tailored programs, expert trainers, and a supportive community.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_KW",
    siteName: "Lightness Gym",
    images: [{ url: "/images/logo-full.jpg", width: 1080, height: 1080, alt: "Lightness Gym Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightness Gym — Ladies Fitness in Kuwait",
    description:
      "Kuwait's premier ladies-only fitness destination. Tailored programs, expert trainers, and a supportive community.",
    images: ["/images/logo-full.jpg"],
  },
  metadataBase: new URL("https://lightness-gym.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Tajawal:wght@400;500;700;800&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

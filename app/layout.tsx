import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightness Gym — Ladies Fitness in Kuwait",
  description:
    "Kuwait's premier ladies-only fitness destination. Tailored programs, expert trainers, and a supportive community — all designed for you.",
  openGraph: {
    title: "Lightness Gym — Ladies Fitness in Kuwait",
    description:
      "Kuwait's premier ladies-only fitness destination. Tailored programs, expert trainers, and a supportive community.",
    type: "website",
    locale: "en_US",
    siteName: "Lightness Gym",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightness Gym — Ladies Fitness in Kuwait",
    description:
      "Kuwait's premier ladies-only fitness destination. Tailored programs, expert trainers, and a supportive community.",
  },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

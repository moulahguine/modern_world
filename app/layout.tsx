import "./globals.css";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import Script from "next/script";

const playfair = localFont({
  src: [
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Modern World — Futuristic Architecture & Elegant Urban Design",
    template: "%s | Modern World",
  },
  description:
    "Explore modern and futuristic architecture: curated designs, global landmarks, and client testimonials showcasing aesthetic, functional spaces.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://modernworldx.netlify.app/",
    title: "Modern World — Futuristic Architecture & Elegant Urban Design",
    description:
      "Discover modern architectures and futuristic buildings worldwide. Refined aesthetics, detailed craftsmanship, and client stories.",
    images: [
      {
        url: "/images/og/modern-world-og.jpg",
        width: 1200,
        height: 630,
        alt: "Futuristic skyline with elegant modern architecture",
      },
    ],
    siteName: "Modern World",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern World — Futuristic Architecture & Elegant Urban Design",
    description:
      "Explore curated modern architectures, global landmarks, and client testimonials.",
    images: ["/images/og/modern-world-og.jpg"],
    creator: "@modernworld",
  },
  alternates: {
    canonical: "https://modernworldx.netlify.app/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${manrope.variable} bg-white text-black antialiased`}
      >
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Modern World",
              url: "https://modernworldx.netlify.app/",
              description:
                "Explore modern and futuristic architecture: curated designs, global landmarks, and client testimonials.",
              creator: {
                "@type": "Organization",
                name: "Modern World",
              },
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

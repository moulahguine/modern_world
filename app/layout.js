import "./globals.css";
import localFont from "next/font/local";

const playfair = localFont({
  src: [
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope/Manrope-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope/Manrope-Medium.ttf",
      weight: "500",
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
    {
      path: "../public/fonts/Manrope/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Modern World",
  description: "A modern architecture landing page",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${manrope.variable} bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

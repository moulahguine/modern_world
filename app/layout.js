import "./globals.css";

export const metadata = {
  title: "Modern World",
  description: "A modern architecture landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}

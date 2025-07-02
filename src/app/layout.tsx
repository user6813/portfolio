import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libertinus+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="libertinus-mono-regular bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

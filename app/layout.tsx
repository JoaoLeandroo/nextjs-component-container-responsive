import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Container responsivo",
  description: "Create Container Responsive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen flex flex-col">
          <Header/>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

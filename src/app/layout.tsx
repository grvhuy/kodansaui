import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kodansa",
  description: "Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-white`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StoreProvider from "@/lib/redux/Provider";

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
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}

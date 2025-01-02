import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import StoreProvider from "@/lib/redux/Provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";
import HeaderFooterWrapper from "../components/admin/HeaderFooterWrapper";
import "./globals.css";

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
      <body className={`${font.className} bg-white`}>
        <main>
          <AuthProvider>
            <StoreProvider>
              <React.StrictMode>
                <HeaderFooterWrapper>
                  <div className="p-8 w-full 2xl:w-2/3 mx-auto 2xl:p-0">
                    {children}
                  </div>
                  <Toaster />
                </HeaderFooterWrapper>
              </React.StrictMode>
            </StoreProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}

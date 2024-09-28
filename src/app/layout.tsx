import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StoreProvider from "@/lib/redux/Provider";
import { AuthProvider } from "@/context/AuthContext";

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
              <Header />
              <div className="p-8 w-full 2xl:w-2/3 mx-auto 2xl:p-0">
                {children}
              </div>
              <Footer />
            </StoreProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}

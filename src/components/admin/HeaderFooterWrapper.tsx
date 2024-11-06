"use client"; 

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const HeaderFooterWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const firstpath = pathname.split('/')[1];
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    if (firstpath === 'dashboard') {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true);
    }
  }, [pathname]);

  return (
    <>
      {showHeaderFooter && <Header />}
      <div className="p-8 w-full 2xl:w-2/3 mx-auto 2xl:p-0">
        {children}
      </div>
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default HeaderFooterWrapper;
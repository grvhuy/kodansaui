"use client";
import { MyButtonForward } from "@/components/MyButtonFoward";
import { MyProgress } from "@/components/MyProgress";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OrderSuccessPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col mx-8 items-center justify-center">
      {/* set 1s loading ui */}
      {loading ? (
          <MyProgress />
      ) : (
        <div className="flex flex-col space-y-4" >
          <h1 className="text-6xl font-extrabold">
            Thanks for your purchase 📚🎉
          </h1>
          
          <MyButtonForward
            text="VIEW YOUR ORDERS"
            onClick={() => router.push("/orders")} 
          />
        </div>
      )}
    </div>
  );
};

export default OrderSuccessPage;

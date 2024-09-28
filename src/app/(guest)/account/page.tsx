"use client";

import { OrderCard } from "@/components/checkout-page/OrderCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getOrders } from "@/utils/api";
import { useEffect, useState } from "react";

const AccountPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrders();
      setOrders(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen mt-32 flex flex-col mb-64">
      <h1 className="text-6xl font-extrabold">Account</h1>
      <Separator className="border-[1px] mt-4 border-black" />
      <div className="flex space-x-8">
        <div className="w-1/2 border-2 border-black p-2 mt-8">
          <h3 className="font-semibold">Email Address</h3>
          <h3>email@gmail.com</h3>
        </div>
        <div className="flex justify-between items-center w-1/2 border-2 border-black p-2 mt-8">
          <div>
            <h3 className="font-semibold">Password</h3>
            <h3>email@gmail.com</h3>
          </div>
          <Button variant="link" className="">
            Change
          </Button>
        </div>
      </div>

      <h1 className="text-4xl font-extrabold mt-24">Orders history</h1>
      <Separator className="border-[1px] mt-4 border-black" />
      <div className="flex justify-center w-full">
        <div className="w-full">
          {orders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

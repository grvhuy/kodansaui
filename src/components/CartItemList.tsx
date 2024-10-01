"use client";
import { ArrowRightIcon } from "lucide-react";
import { CartItem } from "./CartItem";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

interface IProps {
  items: any[];
  onClickOutside: () => void;
  onShowLogin: () => void;
}

export const CartItemList = (props: IProps) => {
  const accessToken = document.cookie.split(";").find((cookie) => cookie.includes("accessToken="));


  const handleCheckout = () => {
    if (!accessToken) {
      props.onShowLogin();
    } else {
      window.location.href = "/checkout";
    }
  }

  return (
    <div className="w-full h-full">
      {/* Container bao ngoài có chiều cao động và thuộc tính cuộn */}
      <div className=" overflow-y-auto ">
        <div className="p-4 grid grid-cols-10 mt-0 space-x-4 border-b-2 border-black">
          <div className="col-span-5 text-gray-500">Product</div>
          <div className="col-span-2 text-gray-500">Quantity</div>

          <div className="col-span-2 text-gray-500">Price</div>

          <div className="col-span-1 text-gray-500"></div>
        </div>

        {/* Phần cuộn chính chứa các mục trong giỏ hàng */}
        <ScrollArea className="flex flex-col h-24 md:h-48 lg:h-72 w-full">
          {props.items.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              cover_url={item.cover_url}
              seq_number={item.seq_number}
              friendly_id={item.friendly_id}
            />
          ))}
        </ScrollArea>

        <div className="mx-16 mb-2 mt-6">
          <div className="flex justify-between">
            <span className="font-bold text-3xl">Subtotal</span>
            <span className="font-bold text-3xl">
              $
              {props.items.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <div>TAX DETERMINED AT CHECKOUT</div>
        </div>

        <div className="flex flex-col">
          <Button
            onClick={() => {
              handleCheckout()
              console.log("Check")
            }}
            className="flex bg-black rounded-none text-white  font-bold text-3xl hover:bg-gray-800 py-8"
          >
            Checkout &nbsp; <ArrowRightIcon size={36} />
          </Button>
          <Button
            onClick={props.onClickOutside}
            className="bg-white rounded-none text-black  font-bold text-3xl hover:bg-gray-200 py-8"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

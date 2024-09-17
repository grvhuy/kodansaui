import { ArrowRightIcon } from "lucide-react";
import { CartItem } from "./CartItem";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface IProps {
  onClickOutside: () => void;
}

export const CartItemList = (props: IProps) => {
  return (
    <div className="w-full h-full">
      {/* Container bao ngoài có chiều cao động và thuộc tính cuộn */}
      <div className=" overflow-y-auto">
        <div className="p-4 grid grid-cols-10 mt-0 space-x-4">
          <div className="col-span-5 text-gray-500">Product</div>
          <div className="col-span-2 text-gray-500">Quantity</div>

          <div className="col-span-2 text-gray-500">Price</div>

          <div className="col-span-1 text-gray-500"></div>
        </div>

        {/* Phần cuộn chính chứa các mục trong giỏ hàng */}
        <ScrollArea className="flex flex-col h-24 md:h-48 lg:h-72 w-full">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollArea>

        <div className="mx-16 mb-2 mt-6">
          <div className="flex justify-between">
            <span className="font-bold text-3xl">Subtotal</span>
            <span className="font-bold text-3xl">$3.99</span>
          </div>
          <div>TAX DETERMINED AT CHECKOUT</div>
        </div>

        <div className="flex flex-col">
          <Button className="bg-black rounded-none text-white  font-bold text-3xl hover:bg-gray-800 py-8">
            Checkout &nbsp; <ArrowRightIcon size={36} />
          </Button>
          <Button 
            onClick={props.onClickOutside}
          className="bg-white rounded-none text-black  font-bold text-3xl hover:bg-gray-200 py-8">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

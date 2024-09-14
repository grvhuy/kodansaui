import { ArrowRightIcon } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { CartItem } from "../CartItem";
import { Button } from "../ui/button";


interface IProps {
  onClickOutside: () => void;
}

export const CheckoutItemList = (props: IProps) => {
  return (
    <div className="w-full h-full">
      {/* Container bao ngoài có chiều cao động và thuộc tính cuộn */}
      <div className="">
        <div className="p-4 grid grid-cols-10 mt-0 space-x-4">
          <div className="col-span-5 text-gray-500">Product</div>
          <div className="col-span-2 text-gray-500">Quantity</div>

          <div className="col-span-2 text-gray-500">Price</div>

          <div className="col-span-1 text-gray-500"></div>
        </div>

        {/* Phần cuộn chính chứa các mục trong giỏ hàng */}
        <div className="flex flex-col w-full">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />

        </div>

      </div>
    </div>
  );
};

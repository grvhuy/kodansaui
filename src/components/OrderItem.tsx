import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/redux/feature/slices/cart";
import { Minus, PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  friendly_id: string;
  seq_number: number;
  cover_url: string;
  onClickOutside?: () => void;
}

export const OrderItem = (props: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-10 space-x-4 items-center justify-center w-full border-b-[0.5px] border-gray-500 p-2">
      <div className="col-span-5 text-gray-500">
        <div className="flex space-x-2 text-black text-lg">
          <Image
            src={props.cover_url}
            alt="Example Image"
            height={880}
            width={80}
            className="aspect-[5/6] object-cover"
          />
          <div className="flex-col flex justify-center">
            <span className="font-semibold text-black text-lg uppercase">
              {props.name}
            </span>
            <span className="font-semibold text-black text-lg">
              Volume {props.seq_number}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-3 text-black">
        {/* inc va dec btn */}
        <div className="flex space-x-2 ml-2">
          x&nbsp;<span className="font-semibold">{props.quantity}</span>
        </div>
      </div>

      <div className="col-span-2 font-semibold text-black text-lg">
        {
          Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(props.price * props.quantity)
        }
      </div>

    </div>
  );
};

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

export const CartItem = (props: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-10 space-x-4 items-center justify-center border-b-[1px] border-black p-2">
      <div className="col-span-5 text-gray-500">
        <a
          href={`/product/${props.friendly_id}-${props.seq_number}`}
          onClick={() => {
            console.log(props);
          }}
          className="flex space-x-2 text-black text-lg"
        >
          <Image
            src={props.cover_url}
            alt="Example Image"
            height={880}
            width={80}
            className="aspect-[5/6] object-cover"
          />
          <div className="flex-col flex justify-center">
            <span className="font-semibold text-black text-lg uppercase line-clamp-3">
              {props.name}
            </span>
            <span className="font-semibold text-black text-lg italic">
              Volume {props.seq_number}
            </span>
          </div>
        </a>
      </div>
      <div className="col-span-2 font-semibold text-black text-lg">
        {/* inc va dec btn */}
        <div className="flex space-x-2 ml-2">
          <button
            title="Decrement"
            onClick={() => {
              dispatch(decrementQuantity(props.id));
            }}
            className="text-gray-600 hover:text-gray-900 px-1"
          >
            <Minus className="hover:shadow" size={16} />
          </button>
          <span>{props.quantity}</span>
          <button
            title="Increment"
            className="text-gray-600 hover:text-gray-900"
          >
            <PlusIcon
              className="hover:shadow"
              onClick={() => {
                dispatch(incrementQuantity(props.id));
              }}
              size={16}
            />
          </button>
        </div>
      </div>

      <div className="col-span-2 font-semibold text-black text-lg">
        ${props.price * props.quantity}
      </div>

      <XIcon
        onClick={() => {
          dispatch(removeFromCart(props.id));
        }}
        size={24}
        className="col-span-1 h-100 w-100 cursor-pointer text-black"
      />
    </div>
  );
};

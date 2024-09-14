import { XIcon } from "lucide-react";
import Image from "next/image";

interface IProps {
  id: string;
  friendly_id: string;
  seq_number?: number;
  name: string;
  cover_url: string;
  quantity: number;
  price: number;
  onClickOutside: () => void;
}

export const CartItem = () => {
  return (
    <div className="grid grid-cols-10 space-x-4 items-center justify-center border-t-2 border-b-2 border-black p-2">
      <div className="col-span-5 text-gray-500">
        <div className="flex space-x-2 text-black text-lg">
          <Image
            src={
              "https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z"
            }
            alt="Example Image"
            height={880}
            width={80}
            className="aspect-[5/6] object-cover"
          />
          <div className="flex-col flex justify-center">
            <span className="font-semibold text-black text-lg uppercase">The Fable</span>
            <span className="font-semibold text-black text-lg">Volume 1</span>
          </div>
        </div>
      </div>
      <div className="col-span-2 font-semibold text-black text-lg">
        &nbsp; &nbsp; 1
      </div>

      <div className="col-span-2 font-semibold text-black text-lg">$3.99</div>

      <XIcon onClick={()=>{}} size={24} className="col-span-1 h-100 w-100 cursor-pointer text-black" />
    </div>
  );
};

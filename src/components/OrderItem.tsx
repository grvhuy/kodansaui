import Image from "next/image";

interface IProps {
  index: number;
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
  return (
    <div className={`grid grid-cols-10 space-x-4 items-center justify-center w-full border-gray-500 p-2 ${props.index !== 0 ? "border-t-[0.5px]" : ""}`}>
      <div className="col-span-5 text-gray-500">
        <div className="flex space-x-2 text-black text-lg h-full">
          <div className="relative h-32 aspect-[5/6]">
            <Image
              src={props.cover_url}
              alt="Example Image"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
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

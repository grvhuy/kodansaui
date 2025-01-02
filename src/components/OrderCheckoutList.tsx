import { OrderCheckoutItem } from "./OrderCheckoutItem";

interface IProps {
  items: any[];
  onClickOutside: () => void;
}

export const OrderCheckoutList = (props: IProps) => {
  return (
    <div className="w-full h-full">
      <div className="mb-8">
        <div className="p-4 grid grid-cols-7 space-x-4">
          <div className="col-span-5 text-gray-500">Product</div>
          <div className="col-span-1 text-gray-500">Quantity</div>

          <div className="col-span-1 text-gray-500">Price</div>

        </div>

        <div className="flex flex-col w-full">
          {props.items.map((item, index) => (
            <OrderCheckoutItem
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
        </div>
      </div>
    </div>
  );
};

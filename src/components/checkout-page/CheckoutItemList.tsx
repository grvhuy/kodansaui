import { CartItem } from "../CartItem";


interface IProps {
  items: any[];
  onClickOutside: () => void;
}

export const CheckoutItemList = (props: IProps) => {
  return (
    <div className="w-full h-full">
      <div className="">
        <div className="flex flex-col w-full">
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

        </div>

      </div>
    </div>
  );
};

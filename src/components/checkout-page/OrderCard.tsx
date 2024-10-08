import { useState } from "react";
import { OrderItem } from "../OrderItem";
import { MyButton } from "../MyButton";

interface IProps {
  order: any;
}

export const OrderCard = (props: IProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="flex flex-col border-2 border-black p-4 my-8">
      <div className="flex justify-between">
        <h3 className="font-bold">Order ID: #{props.order.id}</h3>
        <h3 className="text-gray-500 italic">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(props.order.created_at))}
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-semibold">
            {props.order.user_addresses.full_name} -{" "}
            {props.order.user_addresses.phone_number}
          </h3>
        </div>
        <div className="flex">
          <h3 className="">
            {props.order.user_addresses.street} -{" "}
            {props.order.user_addresses.city} -{" "}
            {props.order.user_addresses.country}
          </h3>
        </div>

        <div className="flex justify-between">
          <h3 className="font-semibold ">
            Total:{" "}
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(props.order.total)}
          </h3>

          <MyButton
            text="DETAIL"
            onClick={() => setShowDetails(!showDetails)}
          />
        </div>
      </div>

      {showDetails &&
        props.order.order_products.map((product: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center">
            <OrderItem
              key={index}
              index={index}
              id={product.id}
              name={product.volumes.series.name}
              price={product.volumes.price}
              quantity={product.quantity}
              friendly_id={product.volumes.series.friendly_id}
              seq_number={product.volumes.seq_number}
              cover_url={product.volumes.cover_url}
            />
          </div>
        ))}
    </div>
  );
};

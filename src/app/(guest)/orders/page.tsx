"use client";

import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

// import { Textarea } from "@nextui-org/input";
import { OrderItem } from "@/components/OrderItem";
import { getOrders } from "@/utils/api";

const testOrders = [
  {
      "id": "5973ecfa-4c3a-417e-a86e-cfb6d6fe59b4",
      "created_at": "2024-09-19T11:23:18.917924+00:00",
      "address_id": "0f7a9d2e-c75c-4c48-99c6-8538202bdcd8",
      "total": 0,
      "user_addresses": {
          "id": "0f7a9d2e-c75c-4c48-99c6-8538202bdcd8",
          "city": "string",
          "street": "string",
          "country": "string",
          "user_id": "b27da18c-21f1-4036-a11c-70dc3ddf1b21",
          "full_name": "string",
          "created_at": "2024-09-19T02:29:42.194444+00:00",
          "postal_code": "string",
          "phone_number": "string"
      },
      "order_products": [
          {
              "id": "ed036f30-c8c7-4a5d-9f36-fdb754212b4a",
              "volumes": {
                  "id": "34155908-f14e-401a-b0f1-be723fce2895",
                  "pages": 198,
                  "price": 7.99,
                  "series": {
                      "id": "f9b71f49-3b52-4013-8d05-1db243e076b4",
                      "name": "BAKEMONOGATARI (manga)",
                      "tags": [
                          "Fantasy",
                          "Made Into Anime",
                          "Supernatural"
                      ],
                      "type": "Manga",
                      "rating": "16+",
                      "status": "Ongoing",
                      "cover_url": "https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z",
                      "created_at": "2024-09-08T09:51:21.513862+00:00",
                      "description": "A team-up made in manga heaven! The wildly popular Monogatari novel series by renowned bestselling author NISIOISIN has now been reimagined into a knockout manga adapation by none other than legendary artist Oh!Great (Tenjo Tenghe, Air Gear)!\r\n\r\nOne day, high-school student Koyomi Araragi catches a girl named Hitagi Senjougahara when she trips. But-much to his surprise-she doesn’t weigh anything. At all. She says an encounter with a so-called “crab” took away all her weight…\r\n\r\nMonsters have been here since the beginning.\r\nAlways.\r\nEverywhere.",
                      "friendly_id": "bakemonogatari-manga",
                      "thumbnail_url": null,
                      "recent_publish_date": "2020-03-03"
                  },
                  "cover_url": "https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/540_026348a1-c80b-4db5-8b45-873d55b87abd.jpg",
                  "series_id": "f9b71f49-3b52-4013-8d05-1db243e076b4",
                  "created_at": "2024-09-08T10:18:14.907488+00:00",
                  "properties": {
                      "ISBN": "9781949980028",
                      "Print Format": "Paperback",
                      "Print Release": "Jan 7, 2020"
                  },
                  "seq_number": 2,
                  "description": "“I’m just going to show her around.” The one Koyomi Araragi caught was Hitagi Senjogahara—the “girl whose weight was stolen.” The girl must save herself. She’s got to try not to lose herself in her true feelings …",
                  "publish_date": "2020-02-11"
              },
              "order_id": "5973ecfa-4c3a-417e-a86e-cfb6d6fe59b4",
              "quantity": 0,
              "created_at": "2024-09-19T11:23:19.17697+00:00",
              "product_id": "34155908-f14e-401a-b0f1-be723fce2895"
          }
      ]
  }
]

const OrdersHistory = () => {
  const [user, setUser] = useState<any>({});
  const [userId, setUserId] = useState<string>("");
  const [orders, setOrders] = useState<any[]>([]);
  // const [address, setAddress] = useState<Address[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await getOrders();
      setOrders(response);
      console.log(response);
    };

    fetchOrders();
  }, []);

  return (
    <div className="h-full p-20 min-h-screen mt-40 flex flex-col mx-8 mb-64">
      <div className="bg-white p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Orders History</h1>
        </div>
        <div className="">
          {testOrders.map((order: any, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-semibold">
                    Order ID: {order.id}
                  </h1>
                  <p className="text-sm">Order Date: {order.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm">Status: {order.status}</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-4">
                {testOrders.map((order: any, index: number) => (
                  <OrderItem
                    key={index}
                    id={order.id}
                    name={order.order_products[0].volumes.series.name}
                    price={order.order_products[0].volumes.price}
                    quantity={order.order_products[0].quantity}
                    cover_url={order.order_products[0].volumes.cover_url}
                    seq_number={order.order_products[0].volumes.seq_number}
                    friendly_id={order.order_products[0].volumes.series.friendly_id}
                  />
                ))}
              </div>
              <div className="mt-4">
                <h1 className="text-lg font-semibold">Shipping Address</h1>
                <p className="text-sm">{order.user_addresses.full_name}</p>
                <p className="text-sm">{order.user_addresses.street}</p>
                <p className="text-sm">
                  {order.user_addresses.city}, {order.user_addresses.country}
                </p>
                <p className="text-sm">{order.user_addresses.postal_code}</p>
                <p className="text-sm">{order.user_addresses.phone_number}</p>
              </div>
              <div className="mt-4">
                <h1 className="text-lg font-semibold">
                  Subtotal: {order.subtotal}
                </h1>
              </div>
              <Separator className="my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersHistory;

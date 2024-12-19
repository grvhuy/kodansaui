"use client";
import { AddAddressForm } from "@/components/AddAddressForm";
import { MyButton } from "@/components/MyButton";
import { OrderCheckoutList } from "@/components/OrderCheckoutList";
import { CheckoutItemList } from "@/components/checkout-page/CheckoutItemList";
import { Button } from "@/components/ui/button";
import { clearCart } from "@/lib/redux/feature/slices/cart";
import { RootState } from "@/lib/redux/store";
import {
  createOrder,
  getAddresses
} from "@/utils/api";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface GroupedProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  friendly_id: string;
  seq_number: number;
  cover_url: string;
  store_id: string;
}

interface Product {
  volume_id: string;
  quantity: number;
}

const CheckoutPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [isShowAddressForm, setIsShowAddressForm] = useState<boolean>(false);
  const [isEditAddress, setIsEditAddress] = useState<boolean>(false);
  const [editedAddress, setEditedAddress] = useState<any>(null);
  const [method, setMethod] = useState<string>("cod");
  const [groupedProducts, setGroupedProducts] = useState<{
    [key: string]: GroupedProduct[];
  }>({});
  const [products, setProducts] = useState<Product[]>([]);
  // an array of different store id

  const cart_items = useSelector((state: RootState) => state?.cart.cartItems);

  const handleGroupProducts = useCallback(() => {
    const groupedProducts: { [key: string]: GroupedProduct[] } =
      cart_items.reduce(
        (groups: { [key: string]: GroupedProduct[] }, item: any) => {
          if (!groups[item.store_id]) {
            groups[item.store_id] = [];
          }
          groups[item.store_id].push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            friendly_id: item.friendly_id,
            seq_number: item.seq_number,
            cover_url: item.cover_url,
            store_id: item.store_id,
          });
          return groups;
        },
        {}
      );

    setGroupedProducts(groupedProducts);
  }, [cart_items]);

  const handlePlaceOrder = async () => {
    const orderPromises = Object.keys(groupedProducts).map(async (storeId) => {
      const products = groupedProducts[storeId].map((product) => ({
        volume_id: product.id,
        quantity: product.quantity,
      }));

      const response = await createOrder(selectedAddress.id, products, storeId);
      return response;
    });

    const results = await Promise.all(orderPromises);
    if (results.length > 0) {
      dispatch(clearCart());
    }
    console.log("results:", results);
    console.log("groupedProducts:", groupedProducts);
    console.log("selectedAddress:", cart_items);
  };

  useEffect(() => {
    handleGroupProducts();
  }, [cart_items, handleGroupProducts]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAddresses();
      // console.log("all addresses:", data);
      // console.log("cart items:", cart_items);

      setAddresses(data);
      setSelectedAddress(data[0]);
    };
    fetchData();
  }, [isShowAddressForm, isEditAddress]);

  return (
    <div className="min-h-screen mt-20">
      <button
        onClick={() => {
          console.log(groupedProducts);
        }}
      >
        loggggggg
      </button>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Payment
            </h1>

            <div className="mt-4 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <div className="flex flex-col">
                <section className="border-2 border-black p-4">
                  <h1 className="mt-2 font-bold text-black text-xl mb-4">
                    Method
                  </h1>

                  {/* Cod */}
                  <div
                    className={`flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-none shadow-md mb-4
                     ${method === "cod" ? "border-2 border-black" : ""}`}
                  >
                    <h1 className="font-bold text-black text-lg">
                      Cash on Delivery
                    </h1>

                    <Button
                      className={`${
                        method !== "cod" ? "bg-white text-black" : ""
                      } rounded-none border-2 border-black p-2 font-semibold hover:text-white min-w-[100px]`}
                      onClick={() => {
                        setMethod("cod");
                      }}
                    >
                      {method === "cod" ? "Selected" : "Select"}
                    </Button>
                  </div>

                  {/* Pickup at store */}
                  <div
                    className={`flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-none shadow-md mb-4 ${
                      method === "pickup" ? "border-2 border-black" : ""
                    }`}
                  >
                    <h1 className="font-bold text-black text-lg">
                      Pickup at Store
                    </h1>

                    <Button
                      className={`${
                        method !== "pickup" ? "bg-white text-black" : ""
                      } rounded-none border-2 border-black p-2 font-semibold hover:text-white min-w-[100px]`}
                      onClick={() => {
                        setMethod("pickup");
                      }}
                    >
                      {method === "pickup" ? "Selected" : "Select"}
                    </Button>
                  </div>
                </section>
                <section className="mt-4">
                  {/* address section */}
                  <div className=" border-2 border-black rounded-none ">
                    <div className=" flex flex-col justify-center w-full p-4 bg-white dark:bg-gray-900 rounded-md shadow-md">
                      <div className="mb-2 flex justify-between items-center">
                        <h1 className="mt-2 font-bold text-black text-xl mb-4">
                          Address
                        </h1>
                        <MyButton
                          text={`${
                            isShowAddressForm ? "Your addresses" : "Add Address"
                          }`}
                          onClick={() => {
                            setIsShowAddressForm(!isShowAddressForm);
                            // if (isShowAddressForm) {
                            //   setIsEditAddress(false);
                            // }
                            if (isEditAddress) {
                              setIsEditAddress(false);
                            }
                          }}
                        />
                      </div>
                      {/* Neu khong show form va co gia tri tring addreses thi map qua mang  */}
                      {!isShowAddressForm && addresses.length > 0 && (
                        <div>
                          {addresses.map((address) => (
                            <div
                              key={address.id}
                              className={`flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-none shadow-md mb-4 ${
                                selectedAddress?.id === address.id
                                  ? "border-2 border-black"
                                  : ""
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <h1 className="font-bold text-black text-lg">
                                    {address.full_name}
                                  </h1>
                                  <p className="text-gray-500 dark:text-gray-400">
                                    &nbsp; {address.phone_number}
                                  </p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400">
                                  {address.street} - {address.city} -{" "}
                                  {address.country}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                  Postal Code: {address.postal_code}
                                </p>
                              </div>
                              <div className="flex flex-col">
                                <Button
                                  className={`${
                                    selectedAddress?.id === address.id
                                      ? "bg-black text-white"
                                      : "bg-white text-black"
                                  } rounded-none border-2 border-black p-2 font-semibold hover:text-white min-w-[100px]`}
                                  onClick={() => setSelectedAddress(address)}
                                >
                                  {selectedAddress?.id === address.id
                                    ? "Selected"
                                    : "Select"}
                                </Button>
                                <Button
                                  className="bg-white text-black rounded-none border-2 border-black p-2 font-semibold mt-2 hover:text-white"
                                  onClick={() => {
                                    setIsShowAddressForm(true);
                                    setIsEditAddress(true);
                                    setEditedAddress(address);
                                  }}
                                >
                                  {" "}
                                  Edit
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Neu khong co gia tri trong addresses thi show form */}
                      {isShowAddressForm && !isEditAddress && (
                        <AddAddressForm
                          id={null}
                          fullName=""
                          phoneNumber=""
                          street=""
                          city=""
                          country=""
                          postalCode=""
                        />
                      )}

                      {isShowAddressForm && isEditAddress && (
                        <AddAddressForm
                          id={editedAddress?.id}
                          fullName={editedAddress?.full_name}
                          phoneNumber={editedAddress?.phone_number}
                          street={editedAddress?.street}
                          city={editedAddress?.city}
                          country={editedAddress?.country}
                          postalCode={editedAddress?.postal_code}
                        />
                      )}
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-6 grow sm:mt-8 lg:mt-0">
                <div className="space-y-4 rounded-none border-2 border-black bg-black  p-6 dark:border-gray-700 dark:bg-gray-800">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-white mb-4">
                      Order Summary
                    </p>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-white text-base font-normal  dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-white text-base font-medium dark:text-white">
                        $
                        {cart_items.reduce(
                          (acc: number, item: any) =>
                            acc + item.price * item.quantity,
                          0
                        )}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-white text-base font-normal  dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-white text-base font-medium ">
                        -$9.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-white text-base font-normal  dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-white text-base font-medium dark:text-white">
                        $9.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-white text-base font-normal  dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-white text-base font-medium dark:text-white">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-white text-base font-bold dark:text-white">
                      Total
                    </dt>
                    <dd className="text-white text-base font-bold dark:text-white">
                      $
                      {cart_items.reduce(
                        (acc: number, item: any) =>
                          acc + item.price * item.quantity,
                        0
                      )}
                    </dd>
                  </dl>

                  <Button
                    className="w-full mt-4 rounded-none border-2 border-white bg-black text-white hover:bg-white hover:text-black p-5 font-semibold"
                    variant="ghost"
                    onClick={handlePlaceOrder}
                  >
                    PLACE ORDER
                  </Button>
                </div>
                <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                      YOUR PRODUCTS
                    </h1>
                    <CheckoutItemList
                      items={cart_items}
                      onClickOutside={() => {}}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            YOUR ORDERS
          </h1>
          {/* <CheckoutItemList items={cart_items} onClickOutside={() => {}} /> */}
          {Object.keys(groupedProducts).map((store_id) => (
            <div key={store_id}>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Store: {store_id}
              </h1>
              <OrderCheckoutList
                items={groupedProducts[store_id]}
                onClickOutside={() => {}}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;

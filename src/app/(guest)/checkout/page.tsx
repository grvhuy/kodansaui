"use client";
import { AddAddressForm } from "@/components/AddAddressForm";
import { MyButton } from "@/components/MyButton";
import { CheckoutItemList } from "@/components/checkout-page/CheckoutItemList";
import { Button } from "@/components/ui/button";
import { clearCart } from "@/lib/redux/feature/slices/cart";
import { addAddress, createOrder, getAddresses } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const router = useRouter();
  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [isShowAddressForm, setIsShowAddressForm] = useState<boolean>(false);
  const [isEditAddress, setIsEditAddress] = useState<boolean>(false);
  const [editedAddress, setEditedAddress] = useState<any>(null);

  const cart_items = useSelector((state) => state?.cart.cartItems);

  const handlePlaceOrder = async () => {
    const products = cart_items.map((item: any) => (
      {
        volume_id: item.id,
        quantity: item.quantity,
      }
    ));
    await createOrder(selectedAddress.id, products).then((data) => {
      if (data) {
        clearCart();
        router.push("/order-success");
      } else return;
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAddresses();
      console.log(data);
      setAddresses(data);
      setSelectedAddress(data[0]);
    };
    fetchData();
  }, [
    isShowAddressForm,
    isEditAddress,
  ]);

  return (
    <div className="min-h-screen mt-20">
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Payment
            </h1>

            <div className="mt-4 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <div className="flex flex-col">
                <form
                  action="#"
                  className="w-full rounded-none border-2 border-black bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
                >
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        // for="full_name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Full name (as displayed on card)*{" "}
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        className="block w-full rounded-none border-2 border-black p-2.5 text-sm text-gray-900 dark:border-black dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 focus:outline-none"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        // for="card-number-input"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Card number*{" "}
                      </label>
                      <input
                        type="text"
                        id="card-number-input"
                        className="block w-full rounded-none border-2 border-black p-2.5 text-sm text-gray-900 dark:border-black dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 focus:outline-none"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                        required
                      />
                    </div>

                    <div>
                      <label
                        // for="card-expiration-input"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Card expiration*{" "}
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                          <svg
                            className="h-4 w-4  dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          // datepicker
                          datepicker-format="mm/yy"
                          id="card-expiration-input"
                          type="text"
                          className="block w-full rounded-none border-2 border-black bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:placeholder:text-gray-400 focus:outline-none"
                          placeholder="MM / YY"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        // for="cvv-input"
                        className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CVV*
                        <button
                          data-tooltip-target="cvv-desc"
                          data-tooltip-trigger="hover"
                          className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                        >
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          id="cvv-desc"
                          role="tooltip"
                          className="tooltip invisible absolute z-10 inline-block rounded-none bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                        >
                          The last 3 digits on back of card
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>
                      </label>
                      <input
                        type="number"
                        id="cvv-input"
                        aria-describedby="helper-text-explanation"
                        className="block w-full rounded-none border-2 border-black p-2.5 text-sm text-gray-900 dark:border-black dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 focus:outline-none"
                        placeholder="•••"
                        required
                      />
                    </div>
                  </div>
                </form>
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
                                  } rounded-none border-2 border-black p-2 font-semibold hover:text-white`}
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
                    <dl className="text-3xl font-bold text-white mb-4">
                      Order Summary
                    </dl>
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

                <div className="mt-6 flex items-center justify-center gap-8">
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                    alt=""
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                    alt=""
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto dark:flex"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Your Products
          </h1>
          <CheckoutItemList items={cart_items} onClickOutside={() => {}} />
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
    </div>
  );
};

export default CheckoutPage;

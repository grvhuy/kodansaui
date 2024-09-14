"use client";

import { useState } from "react";
import { MyButton } from "../MyButton";
import { Search } from "lucide-react";
import { CartItemList } from "../CartItemList";
import { ScrollArea } from "../ui/scroll-area";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-[99%] z-20 top-0 start-0 dark:border-gray-600 border-2 border-black m-2 py-2">
        <div className=" flex flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Kodansa
            </span>
          </a>

          <div
            className="items-center justify-between hidden md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-row p-4 space-x-8 font-semibold">
              <li>
                <a
                  href="/browse"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0 md:dark:hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Browse
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0 md:dark:hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setShowSearch(!showSearch);
                    setShowCart(false);
                  }}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0 md:dark:hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Search
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0 md:dark:hover:underline0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <MyButton
                text="Cart"
                onClick={() => {
                  setShowCart(!showCart);
                  setShowSearch(false);
                }}
              />
              <MyButton text="Login" onClick={() => {}} />
            </div>
          </div>
        </div>
      </nav>
      {/* search bar */}
      {showSearch && (
        <div className="w-[99%] p-4 bg-gray-100 dark:bg-gray-800 border-black border-2 fixed top-[120px] z-20 mx-2 pb-4">
          <div className="flex justify-center w-full">
            <div className="flex flex-col justify-center items-center w-2/3">
              <h1>SEARCH BY SOMETHING</h1>
              <div className="flex space-x-2 w-full">
                <input
                  type="text"
                  className="border-2 w-full p-2 border-black focus-visible:outline-none"
                  placeholder="Search here..."
                />
                <button className=" text-white p-2">
                  <Search color="black" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show Cart */}
      {showCart && (
        <div>
          {/* Layout boc ngoai */}
          <div
            onClick={() => {
              setShowCart(false);
            }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-end"
          ></div>

          <div className="flex justify-end">
            <div
              className="w-[96%] md:w-[45%] bg-gray-100 dark:bg-gray-800 border-black border-2 
              fixed top-[120px] z-30 mx-2 overflow-y-auto"
            >
              <div className="flex w-full">
                <div className="flex flex-col justify-center w-full">
                  <h1 className="font-bold text-xl p-4">CART ORDER</h1>
                  <div className="flex space-x-2 w-full">
                    <CartItemList
                      onClickOutside={() => {
                        setShowCart(false);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

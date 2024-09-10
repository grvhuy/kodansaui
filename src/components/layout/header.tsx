"use client";

import { MyButton } from "../MyButton";

export const Header = () => (
  <nav className="bg-white dark:bg-gray-900 fixed w-[99%] z-20 top-0 start-0   dark:border-gray-600 border-2 border-black m-2 py-2">
    
    <div className=" flex flex-wrap items-center justify-between p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
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
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0 md:dark:hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Library
            </a>
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
          <MyButton text="Cart" onClick={() => {}} />
          <MyButton text="Login" onClick={() => {}} />
        </div>
      </div>

    </div>
  </nav>
);

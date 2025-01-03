"use client";

import { Search } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItemList } from "../CartItemList";
import { MyButton } from "../MyButton";
import { Button } from "../ui/button";
// import { addToCart } from "@/lib/redux/feature/slices/cart";
import { useAuth } from "@/context/AuthContext";
import { RootState } from "@/lib/redux/store";
import { searchByQuery } from "@/utils/api";
import { useRouter } from "next/navigation";
import { LoginForm } from "../auth/LoginForm";
import SearchResultCardHome from "../home-page/SearchResultCardHome";

export const Header = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [type, setType] = useState("login");

  const [searchQuery, setSearchQuery] = useState("");
  const cart_items = useSelector((state: RootState) => state?.cart.cartItems);
  useEffect(() => {
    // use useDispatch to dispatch action
    console.log("cart_items: ", cart_items);
  }, [cart_items]);

  const { logout } = useAuth();

  // lay user tu cookie
  const userInJSON = document.cookie
    .split(";")
    .find((item) => item.includes("user"));
  const user = userInJSON ? JSON.parse(userInJSON.split("=")[1]) : null;

  useEffect(() => {
    // Lay tu cookie
    // const accessToken = document.cookie
    //   .split(";")
    //   .find((item) => item.includes("accessToken"));
    // const token = accessToken?.split("=")[1];
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${searchQuery}`);
    } else return;
    setShowSearch(false);
  };

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length === 0) {
        setSearchResult([]);
      }

      if (searchQuery.trim() !== "") {
        const fetchData = async () => {
          try {
            const data = await searchByQuery(searchQuery);
            setSearchResult(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-[99%] z-20 top-0 start-0 dark:border-gray-600 border-2 border-black m-2">
        <div className=" flex flex-wrap items-center justify-between p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse ms-4"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              <span className="text-4xl">K</span>odansa
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
                  href="/news"
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
                    setShowMenu(false);
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
                text="CART"
                onClick={() => {
                  setShowCart(!showCart);
                  setShowMenu(false);
                  setShowSearch(false);
                }}
              />
              {user ? (
                <MyButton
                  text={user.email}
                  onClick={() => {
                    setShowMenu(!showMenu);
                    setShowSearch(false);
                    setShowCart(false);
                  }}
                />
              ) : (
                <LoginForm
                  type={type}
                  onChangeType={(type) => {
                    setType(type);
                  }}
                  onClose={() => setShowLogin(false)}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* search bar */}
      {showSearch && (
        <div>
          <div
            onClick={() => {
              setShowSearch(false);
            }}
            className="fixed top-0 left-0 w-full h-full z-10 flex justify-end"
          ></div>
          <div className="w-[99%] p-4 bg-gray-100 dark:bg-gray-800 border-black border-2 fixed top-[80px] z-20 mx-2 pb-4">
            <div className="flex justify-center w-full max-h-[60vh]">
              <div className="flex flex-col justify-center items-center w-2/3">
                <h1>SEARCH BY SOMETHING</h1>
                <form
                  onSubmit={handleOnSubmit}
                  className="flex space-x-2 w-full"
                >
                  <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    type="text"
                    className="border-2 w-full p-2 border-black focus-visible:outline-none"
                    placeholder="Search here..."
                  />
                  <button
                    title="Search"
                    type="submit"
                    onClick={handleSearch}
                    className=" text-white p-2"
                  >
                    <Search color="black" size={24} />
                  </button>
                </form>
                <div
                  onClick={() => setShowSearch(false)}
                  className="mt-2 w-full space-y-2 h-2/3 overflow-y-auto"
                >
                  {searchResult.map((item) => (
                    <SearchResultCardHome
                      key={item.id}
                      coverUrl={item.cover_url}
                      friendlyId={item.friendly_id}
                      name={item.name}
                      coverColor={item.cover_color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <div>
          <LoginForm
            type={type}
            onChangeType={(type) => {
              setType(type);
            }}
            onClose={() => setShowLogin(false)}
            isOpen={showLogin}
          />
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
            className="fixed top-0 left-0 w-full h-full z-10 flex justify-end"
          ></div>
          <div className="flex justify-end">
            <div
              className="w-[96%] md:w-[40%] bg-gray-100 dark:bg-gray-800 border-black border-2 
                fixed top-[88px] z-30 mx-2 overflow-y-auto"
            >
              <div className="flex w-full">
                <div className="flex flex-col justify-center w-full">
                  <h1 className="font-bold text-xl p-4">CART ORDER</h1>
                  <div className="flex space-x-2 w-full">
                    <CartItemList
                      items={cart_items}
                      onShowLogin={() => setShowLogin(true)}
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
      {user && showMenu && (
        <div>
          {/* Layout boc ngoai */}
          <div
            onClick={() => {
              setShowMenu(false);
            }}
            className="fixed top-0 left-0 w-full h-full z-10 flex justify-end"
          ></div>

          <div className="flex justify-end">
            <div
              className="w-[96%] md:w-[30%] bg-gray-100 dark:bg-gray-800 border-black border-2 
                      fixed top-[88px] z-30 mx-2 overflow-y-auto"
            >
              <div className="flex w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <h1 className="font-bold text-xl p-4">{user.email}</h1>
                  <div className="flex flex-col w-full">
                    <Button
                      className="rounded-none bg-white text-black p-8 border-b-2 border-t-2 border-black  hover:bg-black hover:text-white text-3xl font-semibold"
                      onClick={() => {
                        router.push("/account");
                      }}
                    >
                      Account
                    </Button>
                    <Button
                      className="rounded-none hover:bg-black hover:text-white bg-white text-black p-8  text-3xl font-semibold"
                      onClick={() => {
                        logout();
                        setShowMenu(false);
                      }}
                    >
                      Logout
                    </Button>
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

"use client";

import ProductCard from "@/components/browse-page/ProductCard";
import { searchByQuery } from "@/utils/api";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const SearchPage = () => {
  // search?query=${searchQuery}

  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (typeof window !== undefined) {
      const params = new URLSearchParams(window.location.search);
      const _query = params.get("query");
      setQuery(_query || "");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length === 0) {
        return
      }
      if (query.trim() !== "") {
        const fetchData = async () => {
          try {
            const data = await searchByQuery(query);
            setSearchResult(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim() === "") {
      return;
    } else {
      router.push(`/search?query=${query}`);
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen mt-40 flex flex-col mb-64">
      <form
        onSubmit={handleOnSubmit}
        // action={`/search?query=${query}`}
        // method="post"
        className="w-full"
      >
        <h1 className="text-6xl font-extrabold">Search Result</h1>
        <input
          className="mt-4 p-4 border-b-2 border-b-gray-500 focus:outline-none text-2xl w-full"
          type="text"
          placeholder="Search..."
          // onChange={() => setQuery(query)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button
          type="submit"
          onClick={handleOnSubmit}
          className=" text-white p-2"
        >
          <Search color="black" size={24} />
        </button> */}
      </form>

      {/* Hien thi ket qua */}
      <h1 className="text-3xl font-extrabold mt-16 mb-4">Top Picks</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {searchResult.map((item: any, index) => (
          <ProductCard
            key={index}
            id={item.id}
            friendly_id={item.friendly_id}
            name={item.name}
            cover_url={item.cover_url}
            thumbnail_url={item.thumbnail_url}
            cover_color={item.cover_color}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

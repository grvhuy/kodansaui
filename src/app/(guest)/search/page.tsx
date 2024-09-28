"use client";

import { SearchResultCard } from "@/components/search-page/SearchResultCard";
import { searchByQuery } from "@/utils/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  // search?query=${searchQuery}
  const pathName = usePathname();
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
    if (query) {
      searchByQuery(query).then((data) => {
        setSearchResult(data);
      });
    }
  }
  , [query]);

  return (
    <div className="min-h-screen mt-40 flex flex-col mx-8 mb-64">
      <h1 className="text-6xl font-extrabold">Search Result</h1>
      <input
        className="mt-4 p-4 border-b-2 border-b-gray-500 focus:outline-none text-2xl"
        type="text"
        placeholder="Search..."
      />

      {/* Hien thi ket qua */}
      <h1 className="text-3xl font-extrabold mt-16 mb-4">Top Picks</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 ms-8">
        {searchResult.map((item: any, index) => (
          <SearchResultCard key={index} 
            id={item.id}
            friendly_id={item.friendly_id}
            name={item.name}
            cover_url={item.cover_url}
            thumbnail_url={item.thumbnail_url}
            type={item.type}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

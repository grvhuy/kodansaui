"use client"

import { SearchResultCard } from "@/components/search-page/SearchResultCard";

const SearchPage = () => {
  return (
    <div className="min-h-screen mt-40 flex flex-col mx-8 mb-64">
      <h1 className="text-6xl font-extrabold">Search Result</h1>
      <input className="mt-4 p-4 border-b-2 border-b-gray-500 focus:outline-none text-2xl" type="text" placeholder="Search..." />
      
      {/* Hien thi ket qua */}
      <h1 className="text-3xl font-extrabold mt-16 mb-4">Top Picks</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 ms-8">
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />

      </div>
    </div>
  );
};

export default SearchPage;

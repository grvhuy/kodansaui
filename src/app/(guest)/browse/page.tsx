"use client";

import { MyButtonLarge } from "@/components/MyButtonLarge";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { FilterAge } from "@/components/browse-page/FilterAge";
import { FilterFormat } from "@/components/browse-page/FilterFormat";
import { FilterStatus } from "@/components/browse-page/FilterStatus";
import ProductCard from "@/components/browse-page/ProductCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { getCatFact, getSeries } from "@/utils/api";

const sortByItems = ["New and Popular", "A-Z", "Z-A", "Newest", "Oldest"];

const BrowsePage = () => {
  const [type, setType] = useState("Manga");
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    getSeries().then((data) => {
      console.log(data);
      setSeries(data);
    });
    
  }, []);

  return (
    <div className="min-h-screen mt-40 flex flex-col mx-8">
      <h1 className="text-6xl font-extrabold">BROWSE</h1>
      <div className="mt-12 flex space-x-4">
        <p
          onClick={() => setType("Manga")}
          className={`cursor-pointer font-bold  text-3xl hover:text-black ${
            type === "Manga"
              ? "underline underline-offset-8 text-black"
              : "text-gray-400"
          }`}
        >
          Manga
        </p>

        <p
          onClick={() => setType("Books")}
          className={`cursor-pointer font-bold  text-3xl hover:text-black ${
            type === "Books"
              ? "underline-offset-8 underline text-black"
              : "text-gray-400"
          }`}
        >
          Books
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-1">
        <MyButtonLarge text="SERIES" onClick={() => {}} />
        <MyButtonLarge text="NEW RELEASE" onClick={() => {}} />
        <MyButtonLarge text="ON SALES" onClick={() => {}} />
      </div>

      {/* Browse display content */}

      <div className="grid grid-cols-9 mt-16  mb-64">
        {/* Sort by + filter by */}
        <div className="flex flex-col col-span-2">
          <aside className="w-64 sticky top-28">
            <h2 className="font-bold text-xl my-2">Sort by:</h2>
            <MyDropdownMenu
              title="New and Popular"
              items={sortByItems}
              onClick={(index) => {
                console.log(index);
              }}
            />

            <h2 className="font-bold text-xl mt-8 mb-2">Filter by:</h2>
            {/* Filter status vs FORMATS la radio group */}
            <FilterStatus onChange={() => {}} />
            <FilterFormat onChange={() => {}} />
            <FilterFormat onChange={() => {}} />
            <FilterAge onChange={() => {}} />
          </aside>
        </div>
        {/* products */}

        <div className="grid grid-cols-4 col-span-7 space-x-4 space-y-8">
          <div className="col-span-4 ms-4 my-2">
            <p className="mb-4 font-bold ">Display 1-22 of 100 Series</p>
            <Separator className="bg-black border-[1.2px] border-black mb-4 mt-8" />
          </div>
          {series.map((item: any) => (
            <ProductCard
              key={item.id}
              id={item.id}
              friendly_id={item.friendly_id}
              name={item.name}
              cover_url={item.cover_url}
              thumbnail_url={item.thumbnail_url}
            />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;

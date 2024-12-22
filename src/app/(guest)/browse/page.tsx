"use client";

import { MyButtonLarge } from "@/components/MyButtonLarge";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { FilterAge } from "@/components/browse-page/FilterAge";
import { FilterGenre } from "@/components/browse-page/FilterGenre";
import { FilterStatus } from "@/components/browse-page/FilterStatus";
import ProductCard from "@/components/browse-page/ProductCard";
import { Separator } from "@/components/ui/separator";
import { getSeries } from "@/utils/api";
import { useEffect, useState } from "react";

const sortByItems = ["New and Popular", "A-Z", "Z-A", "Newest", "Oldest"];

const BrowsePage = () => {
  // const [type, setType] = useState("Manga");
  //const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [series, setSeries] = useState<any>([]);
  const [filteredSeries, setFilteredSeries] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const paginatedSeries = filteredSeries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // State for filters and sorting
  const [selectedSort, setSelectedSort] = useState<string>("New and Popular");
  const [selectedStatus, setSelectedStatus] = useState<any>(undefined);
  const [selectedType, setSelectedType] = useState<any>(0);
  const [selectedAge] = useState<any>(undefined);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    getSeries(
      (typeof selectedStatus === "number" && selectedStatus !== -1) ? selectedStatus : undefined,
      typeof selectedAge === "number" && selectedAge !== -1 ? selectedAge : undefined,
      typeof selectedType === "number" ? selectedType : undefined,
      selectedGenres
    ).then((data) => {
      console.log(data);
      setSeries(data);
    });
  }, [selectedStatus, selectedAge, selectedGenres, selectedType]);

  useEffect(() => {
    const filtered = [...series];

    if (selectedStatus) {
      // filtered = filtered.filter((item) => item.status === selectedStatus);
    }

    if (selectedSort === "A-Z") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "Z-A") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredSeries(filtered);
  }, [series, selectedSort, selectedStatus, selectedAge, selectedType]);

  return (
    <div className="min-h-screen mt-32 flex flex-col">
      <h1 className="text-6xl font-extrabold">BROWSE</h1>
      <div className="mt-12 flex space-x-4">
        <p
          onClick={() => setSelectedType(0)}
          className={`cursor-pointer font-bold  text-3xl hover:text-black ${selectedType === 0
            ? "underline underline-offset-8 text-black"
            : "text-gray-400"
            }`}
        >
          Manga
        </p>

        <p
          onClick={() => setSelectedType(1)}
          className={`cursor-pointer font-bold  text-3xl hover:text-black ${selectedType === 1
            ? "underline-offset-8 underline text-black"
            : "text-gray-400"
            }`}
        >
          Books
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-1">
        <MyButtonLarge text="SERIES" onClick={() => { }} />
        <MyButtonLarge text="NEW RELEASE" onClick={() => { }} />
        <MyButtonLarge text="ON SALES" onClick={() => { }} />
      </div>

      {/* Browse display content */}

      <div className="mt-16 flex flex-row w-full space-x-8">
        {/* Sort by + filter by */}
        <aside className="flex flex-col w-[300px] sticky top-28 h-screen flex-shrink-0 overflow-y-scroll scroll-auto">
          <h2 className="font-bold text-xl my-2">Sort by:</h2>
          <MyDropdownMenu
            title="New and Popular"
            items={sortByItems}
            onClick={(index) => {
              setSelectedSort(sortByItems[index]);
            }}
          />
          <h2 className="font-bold text-xl mt-8 mb-2">Filter by:</h2>
          {/* Filter status vs FORMATS la radio group */}
          {/* 0 la ongoing 1 la completed */}
          <FilterStatus
            onChange={(value) => {
              console.log(value);
              setSelectedStatus(value);
            }}
          />
          {/* <FilterFormat onChange={() => {}} /> */}
          <FilterGenre
            onChange={(value: number[]) => {
              setSelectedGenres(value);
            }}
          />
          <FilterAge
            onChange={(value: number) => {
              console.log(value);
              // setSelectedAge(value);
            }}
          />
        </aside>
        {/* products */}

        <div className="flex flex-col space-y-8">
          <p className="font-bold ">Display 1-22 of 100 Series</p>
          <Separator className="bg-black border-[1.2px] border-black w-full" />
          <div className="w-full grid grid-cols-4 gap-4">
            {filteredSeries.map((item: any) => (
              <ProductCard
                key={item.id}
                id={item.id}
                friendly_id={item.friendly_id}
                name={item.name}
                cover_url={item.cover_url}
                thumbnail_url={item.thumbnail_url}
                cover_color={item.cover_color}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
              <button
                title="Previous page"
                type="button"
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 disabled:opacity-50"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
              <button
                type="button"
                title="Next page"
                disabled={currentPage === Math.ceil(filteredSeries.length / itemsPerPage)}
                className="px-4 py-2 bg-gray-300 disabled:opacity-50"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;

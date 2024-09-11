"use client";

import BookTable from "@/components/BookTable";
import GoToTop from "@/components/GoToTop";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import Image from "next/image";

interface Series {
  name: string;
  author: string;
  description: string;
  totalVolumes: number;
}

export default function ProductPage() {
  const series = {
    id: "f9b71f49-3b52-4013-8d05-1db243e076b4",
    friendly_id: "bakemonogatari-manga",
    created_at: "2024-09-08T09:51:21.513862+00:00",
    name: "BAKEMONOGATARI (manga)",
    author_id: "41b89bce-c8d8-4c1c-a197-937230bd4cb2",
    rating: "16+",
    status: "Ongoing",
    description:
      "A team-up made in manga heaven! The wildly popular Monogatari novel series by renowned bestselling author NISIOISIN has now been reimagined into a knockout manga adapation by none other than legendary artist Oh!Great (Tenjo Tenghe, Air Gear)!\r\n\r\nOne day, high-school student Koyomi Araragi catches a girl named Hitagi Senjougahara when she trips. But-much to his surprise-she doesn’t weigh anything. At all. She says an encounter with a so-called “crab” took away all her weight…\r\n\r\nMonsters have been here since the beginning.\r\nAlways.\r\nEverywhere.",
    tags: ["Fantasy", "Made Into Anime", "Supernatural"],
    cover_url:
      "https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z",
    thumbnail_url: null,
    type: "Manga",
  };
  return (
    <div className="mt-40 flex flex-col mx-8 min-h-screen">
      {/* Section Gioi thieu */}
      <div className="grid grid-cols-9">
        <div className="col-span-4 w-full">
          <div className="relative aspect-[5/6]">
            <BreadCrumbCard type="Product" title="BIG DICK" />
            <Image
              src={series.cover_url}
              alt="Example Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-5 ml-6 w-full">
          <div className="flex flex-col">
            <h1 className=" font-bold text-3xl text-black">{series.name}</h1>
            <h1 className=" font-semibold text-gray-400">
              By {series.author_id}
            </h1>
            <p className="mt-4">{series.description}</p>
          </div>
        </div>
      </div>

      {/* Section Series info */}

      <div className="grid grid-cols-9 mb-16">
        <div className="col-span-3 flex flex-col mt-12">
          <h1 className="font-bold text-6xl">BOOK</h1>
          <h1 className="font-bold text-6xl">INFO</h1>
        </div>

        <div className="col-span-6 flex ">
          <BookTable
            pages="1000"
            printRelease="Jun 1, 2023"
            printFormat="Paperback"
            isbn="978-1-947804-00-0"
            rating="16+"
            tags={["asd", "asd"]}
          />
        </div>
      </div>

      {/* Section list*/}

      <GoToTop />
    </div>
  );
}

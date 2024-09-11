"use client";

import GoToTop from "@/components/GoToTop";
import MangaTable from "@/components/MangaTable";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { FullSeriesCarousel } from "@/components/product-page/FullSeriesCarousel";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import VolumnCard from "@/components/series-page/VolumeCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Series {
  name: string;
  author: string;
  description: string;
  totalVolumes: number;
}

export default function DetailVolumePage() {
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
            <BreadCrumbCard type="Manga" title="Test" />
            <Image
              src={series.cover_url}
              alt="Example Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-5 ml-6 w-full">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h1 className=" font-bold text-3xl text-black">{series.name}</h1>
              <h1 className=" font-semibold text-gray-400">
                By {series.author_id}
              </h1>
              <p className="mt-4">{series.description}</p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">Deluxe Edition</span>
                  <p className="text-gray-600">
                    Purchase to read this volume and all its chapters online.
                  </p>
                </div>
                <div className="font-bold text-3xl">$7.99</div>
              </div>

              {/* Buy button */}
              <Button className="w-full mt-4 rounded-none p-8 text-2xl font-bold">
                BUY DELUXE EDITION
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Series info */}

      <div className="grid grid-cols-9 mb-16">
        <div className="col-span-3 flex flex-col mt-12">
          <h1 className="font-bold text-6xl">SERIES</h1>
          <h1 className="font-bold text-6xl">INFO</h1>
        </div>

        <div className="col-span-6 flex ">
          <MangaTable
            status="Ongoing"
            rating="16+"
            resources="Fatman.com"
            tags={["asd", "asd"]}
          />
        </div>
      </div>

      {/* Section Volumes list*/}

      <div className="mb-24">
        {/* Previous volume */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <a className="flex items-center space-x-1" href="">
              <ArrowLeft className="border-2 border-black" size={24} />
              <span className="font-bold text-2xl">Previous Volume</span>
            </a>
            <VolumnCard
              volume={{
                id: "f9b71f49-3b52-4013-8d05-1db243e076b4",
                series_id: "f9b71f49-3b52-4013-8d05-1db243e076b4",
                seq_number: 1,
                name: "Volume 1",
                price: 0,
                cover_url:
                  "https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/540_026348a1-c80b-4db5-8b45-873d55b87abd.jpg",
                release_date: "2024-09-08T09:51:21.513862+00:00",
              }}
            />
          </div>

          {/* Next volume */}
          <div>
            <a className="flex items-center space-x-1 justify-end" href="">
              <span className="font-bold text-2xl">Next Volume</span>
              <ArrowRight className="border-2 border-black" size={24} />
            </a>
            <VolumnCard
              volume={{
                id: "f9b71f49-3b52-4013-8d05-1db243e076b4",
                series_id: "f9b71f49-3b52-4013-8d05-1db243e076b4",
                seq_number: 1,
                name: "Volume 1",
                price: 0,
                cover_url:
                  "https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/540_026348a1-c80b-4db5-8b45-873d55b87abd.jpg",
                release_date: "2024-09-08T09:51:21.513862+00:00",
              }}
            />
          </div>
        </div>
      </div>

      {/* Full series list */}
      
      <div className="space-y-2 mb-24">
        <p className="font-extrabold text-3xl">Explore the full series</p>
        <FullSeriesCarousel />
      </div>

      <GoToTop />
    </div>
  );
}

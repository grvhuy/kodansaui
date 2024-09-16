"use client";

import GoToTop from "@/components/GoToTop";
import MangaTable from "@/components/MangaTable";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import VolumnCard from "@/components/series-page/VolumeCard";
import { getSeriesByFriendlyUrl } from "@/utils/api";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Series {
  id: string;
  friendly_id: string;
  name: string;
  author_id: string;
  description: string;
  totalVolumes: number;
  rating: string;
  status: string;
  tags: string[];
  cover_url: string;
  thumbnail_url: string;
  type: string;
}

export default function SeriesPage() {
  const pathname = usePathname();
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const friendly_id = pathname.split("/").pop() as string;

    getSeriesByFriendlyUrl(friendly_id).then((data) => {
      console.log(data[0]);
      setProduct(data[0]);
    });
  }, []);

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
            {product && (
              <Image
                src={product.cover_url}
                alt="Example Image"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className="col-span-5 ml-6 w-full">
          <div className="flex flex-col">
            <h1 className=" font-bold text-3xl text-black">{product.name}</h1>
            <h1 className=" font-semibold text-gray-400">
              By {product.author_id}
            </h1>
            <p className="mt-4">{product.description}</p>
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
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="font-bold text-3xl mr-4">{} VOLUMES</h1>
            <MyDropdownMenu
              title="JUMP TO VOLUME"
              items={["Volume 1", "Volume 2", "Volume 3"]}
              onClick={(index) => {
                console.log(index);
              }}
            />
          </div>
          <div>SHOW CHAPTERS +</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
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

      <GoToTop />
    </div>
  );
}

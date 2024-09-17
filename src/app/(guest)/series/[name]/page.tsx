"use client";

import GoToTop from "@/components/GoToTop";
import MangaTable from "@/components/MangaTable";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import VolumnCard from "@/components/series-page/VolumeCard";
import {
  getFullSeriesByFriendlyId,
  getSeriesByFriendlyUrl
} from "@/utils/api";
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
  // product la object
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fullSeries, setFullSeries] = useState<any[]>([]);
  const friendly_id = pathname.split("/").pop() as string;

  useEffect(() => {
    const fetchData = async () => {
      getFullSeriesByFriendlyId(friendly_id).then((data) => {
        setFullSeries(data);
        console.log(data);
      });
    };
    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSeriesByFriendlyUrl(friendly_id);
      if (data) {
        setProduct(data[0]);
      }

      // const fullSeriesData = await getFullSeriesByFriendlyId(friendly_id);
      // if (fullSeriesData) {
      //   console.log(fullSeriesData);
      // }
      setLoading(false);
    };
    fetchData();
  }, [friendly_id]);

  if (loading) {
    return <p className="h-screen">Loading...</p>;
  }

  return (
    <div className="mt-40 flex flex-col mx-8 min-h-screen">
      {/* Section Gioi thieu */}
      <div className="grid grid-cols-9">
        <div className="col-span-4 w-full">
          <div className="relative aspect-[5/6]">
            <BreadCrumbCard type="Manga" title={product.name} />
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
            status={product.status}
            rating={product.rating}
            resources={product.totalVolumes}
            tags={product.tags}
          />
        </div>
      </div>

      {/* Section Volumes list*/}

      <div className="mb-24">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="font-bold text-3xl mr-4">VOLUMES</h1>
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
          {fullSeries &&
            fullSeries.map((volume) => {
              return <VolumnCard key={volume.seq_number} volume={volume} />;
            })}
        </div>
      </div>

      <GoToTop />
    </div>
  );
}

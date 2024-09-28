"use client";

import GoToTop from "@/components/GoToTop";
import MangaTable from "@/components/MangaTable";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import VolumnCard from "@/components/series-page/VolumeCard";
import { addToCart } from "@/lib/redux/feature/slices/cart";
import { getFullSeriesByFriendlyId, getSeriesByFriendlyUrl } from "@/utils/api";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Series {
  id: string;
  friendly_id: string;
  name: string;
  authors: any[];
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

  useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      getFullSeriesByFriendlyId(friendly_id).then((data) => {
        setFullSeries(data);
      });
    };
    fetchData();
  }, [friendly_id]);

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
    <div className=" mt-32 flex flex-col min-h-screen">
      {/* Section Gioi thieu */}
      <div className="flex space-x-8">
        <div className="relative w-full">
          <BreadCrumbCard type="Manga" title={product.name} />
          {product && (
            <div className="relative group w-full aspect-[5/6]">
              {/* Ảnh Manga */}
              <Image
                priority
                src={product.cover_url}
                alt="Example Image"
                fill
                sizes="100vw"
                className="grayscale object-cover hover:shadow-lg"
              />
            </div>
          )}
        </div>

        <div className=" w-full">
          <div className="flex flex-col">
            <h1 className=" font-bold text-3xl text-black">{product.name}</h1>
            {product && product.series_authors.length === 1 ? (
              <p className="text-md text-gray-500">
                by {product.series_authors[0].authors.name}
              </p>
            ) : (
              <div className="flex">
                <span className="text-md text-gray-500">
                  by {product.series_authors.map((author: any, index: number) => {
                    if (index === 0) return author.authors.name;
                    if (index === product.series_authors.length - 1) return ` and ${author.authors.name}`;
                    return `, ${author.authors.name}`;
                  })}
                </span>
              </div>
            )}
            <p className="mt-4">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Section Series info */}

      <div className="grid grid-cols-9 mb-16">
        <div className="col-span-3 flex flex-col mt-12">
          <h1 className="font-bold text-6xl line-clamp-2">Series Info</h1>
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
            <h1 className="font-bold text-3xl mr-4">{fullSeries.length} Volumes</h1>
            <MyDropdownMenu
              title="JUMP TO VOLUME"
              items={fullSeries.map((volume) => {
                return volume.seq_number;
              })}
              onClick={(index) => {
                console.log(index);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {fullSeries &&
            fullSeries.map((volume) => {
              return (
                <VolumnCard
                  key={volume.seq_number}
                  volume={volume}
                  onClick={() => {
                    // add to cart redux
                    dispatch(
                      addToCart({
                        id: volume.id,
                        name: volume.name,
                        price: volume.price,
                        cover_url: volume.cover_url,
                        quantity: 1,
                        friendly_id: volume.series_id,
                        seq_number: volume.seq_number,
                      })
                    );
                  }}
                />
              );
            })}
        </div>
      </div>

      <GoToTop />
    </div>
  );
}

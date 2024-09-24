"use client";

import GoToTop from "@/components/GoToTop";
import MangaTable from "@/components/MangaTable";
import { FullSeriesCarousel } from "@/components/product-page/FullSeriesCarousel";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import {
  default as VolumeCard,
  default as VolumnCard,
} from "@/components/series-page/VolumeCard";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/redux/feature/slices/cart";
import { getFullSeriesByFriendlyId, getVolume } from "@/utils/api";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Series {
  name: string;
  author: string;
  description: string;
  totalVolumes: number;
}

export default function DetailVolumePage() {
  const pathname = usePathname();
  const fid = pathname.split("/").pop() as string;
  const friendly_id = fid.split("-").slice(0, -1).join("-");
  const vol = fid.split("-").pop() as string;
  const [product, setProduct] = useState<any>(null);
  const [currentSeq, setCurrentSeq] = useState<number>(NaN);
  const [prevProduct, setPrevProduct] = useState<any>(null);
  const [nextProduct, setNextProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fullSeries, setFullSeries] = useState<any[]>([]);

  const dispatch = useDispatch();

  const handleAddToCart = (
    id: string,
    name: string,
    price: number,
    friendly_id: string,
    seq_number: number,
    cover_url: string
  ) => {
    dispatch(
      addToCart({
        id,
        name,
        price,
        quantity: 1,
        friendly_id,
        seq_number,
        cover_url,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      getFullSeriesByFriendlyId(friendly_id).then((data) => {
        setFullSeries(data);
        console.log(data);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVolume(friendly_id, vol);
      console.log(data);
      if (data) {
        console.log(data[0].seq_number);

        setProduct(data[0]);
        if (data[0].seq_number > 1) {
          const prev = await getVolume(
            friendly_id,
            (data[0].seq_number - 1).toString()
          );
          if (prev) {
            setPrevProduct(prev[0]);
          }
        }
        await getVolume(friendly_id, (data[0].seq_number + 1).toString()).then(
          (next) => {
            if (next) {
              setNextProduct(next[0]);
            } else {
              console.log("No next volume");
            }
          }
        );
      }

      setLoading(false);
    };
    fetchData();
  }, [friendly_id]);

  if (loading) {
    return <p className="h-screen">Loading</p>;
  }

  return (
    <div className="mt-40 flex flex-col mx-8 min-h-screen">
      {/* Section Gioi thieu */}
      <div className="grid grid-cols-9 mr-6">
        <div className="col-span-4 w-full">
          <div className="relative aspect-[5/6]">
            <BreadCrumbCard
              type="Manga"
              title={product.series.name + ", Vol " + product.seq_number}
            />
            <Image
              src={product.cover_url}
              alt="Example Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-5 ml-6 w-full">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h1 className=" font-bold text-3xl text-black">
                {product.series.name}, Volume {product.seq_number}
              </h1>
              <h1 className=" font-semibold text-gray-400">
                By{" "}
                {product.series.series_authors
                  .map((author: any) => author.authors.name)
                  .join(", ")}
              </h1>
              <p className="mt-4">{product.description}</p>
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
              <Button
                onClick={() =>
                  handleAddToCart(
                    product.id,
                    product.series.name,
                    product.price,
                    product.series.friendly_id,
                    product.seq_number,
                    product.cover_url
                  )
                }
                className="w-full mt-4 rounded-none p-8 text-2xl font-bold"
              >
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
            status={product.series.status}
            rating={product.series.rating}
            resources={product.series.totalVolumes}
            tags={product.series.tags}
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

            {/* previous of this volume */}
            {prevProduct && (
              <VolumnCard onClick={() => {}} volume={prevProduct} />
            )}
          </div>

          {/* Next volume */}
          <div>
            <a className="flex items-center space-x-1 justify-end" href="">
              <span className="font-bold text-2xl">Next Volume</span>
              <ArrowRight className="border-2 border-black" size={24} />
            </a>
            {nextProduct && (
              <VolumeCard
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: nextProduct.id,
                      name: nextProduct.series.name,
                      price: nextProduct.price,
                      quantity: 1,
                      friendly_id: nextProduct.series.friendly_id,
                      seq_number: nextProduct.seq_number,
                      cover_url: nextProduct.cover_url,
                    })
                  );
                }}
                volume={nextProduct}
              />
            )}
          </div>
        </div>
      </div>

      {/* Full series list */}

      <div className="space-y-2 mb-24">
        <p className="font-extrabold text-3xl">Explore the full series</p>
        <FullSeriesCarousel
          currentVol={product.seq_number}
          volumeList={fullSeries.map((volume) => ({
            friendly_id: volume.series.friendly_id,
            id: volume.id,
            series_id: volume.series_id,
            seq_number: volume.seq_number,
            cover_url: volume.cover_url,
          }))}
        />
      </div>

      <GoToTop />
    </div>
  );
}

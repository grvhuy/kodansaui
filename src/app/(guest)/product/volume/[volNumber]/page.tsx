"use client";

import GoToTop from "@/components/GoToTop";
import MangaTable from "@/components/MangaTable";
import { FullSeriesCarousel } from "@/components/product-page/FullSeriesCarousel";
import { BreadCrumbCard } from "@/components/series-page/BreadCrumbCard";
import { default as VolumeCard } from "@/components/series-page/VolumeCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/lib/redux/feature/slices/cart";
import {
  checkVolumeAvailability,
  getFullSeriesByFriendlyId,
  getVolume,
} from "@/utils/api";
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
  //const [currentSeq, setCurrentSeq] = useState<number>(NaN);
  const [prevProduct, setPrevProduct] = useState<any>(null);
  const [prevAvailable, setPrevAvailable] = useState<boolean>(false);
  const [nextProduct, setNextProduct] = useState<any>(null);
  const [nextAvailable, setNextAvailable] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [fullSeries, setFullSeries] = useState<any[]>([]);
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);

  const dispatch = useDispatch();
  const { toast } = useToast();

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
        store_id: availableProducts[0].store_id,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      getFullSeriesByFriendlyId(friendly_id).then((data) => {
        setFullSeries(data);
        // console.log(data);
      });

      checkVolumeAvailability(friendly_id, vol).then((data) => {
        setAvailableProducts(data);
        console.log(data);
      });
    };
    fetchData();
  }, [friendly_id]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("available:", {
        prevAvailable,
        nextAvailable,
      });
      console.log("prevProduct", prevProduct);
      const volNumber = Number(vol);

      if (volNumber > 1) {
        checkVolumeAvailability(friendly_id, (volNumber - 1).toString()).then(
          (data) => {
            setPrevAvailable(data.length > 0);
            console.log("prev available:", data);
          }
        );
      }
      checkVolumeAvailability(friendly_id, (volNumber + 1).toString()).then(
        (data) => {
          if (data.length > 0) {
            setNextAvailable(true);
          }
        }
      );
    };
    fetchData();
  }, [prevProduct, nextAvailable, prevAvailable, friendly_id, vol]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVolume(friendly_id, vol);
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
            // console.log(prev[0]);
          }
        }
        await getVolume(friendly_id, (data[0].seq_number + 1).toString()).then(
          (next) => {
            if (next) {
              setNextProduct(next[0]);
              // console.log(next[0]);
            } else {
              console.log("No next volume");
            }
          }
        );
      }

      setLoading(false);
    };
    fetchData();
  }, [friendly_id, vol]);

  if (loading) {
    return <p className="h-screen">Loading</p>;
  }

  return (
    <div className="mt-32 flex flex-col min-h-screen">
      {/* Section Gioi thieu */}
      <div className="flex space-x-8">
        <div className="relative w-full">
          <BreadCrumbCard type="Manga" title={`${product.series.name}`} />
          {product && (
            <div className="relative group w-full aspect-[5/6] bg-[#efefef] hover:bg-[#dddddd]">
              {/* Ảnh Manga */}
              <Image
                priority
                src={product.cover_url}
                alt="Example Image"
                fill
                sizes="100vw"
                className="object-contain hover:shadow-lg p-12"
              />
            </div>
          )}
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
                </div>
                <div className="font-bold text-3xl">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </div>
              </div>

              {/* Buy button */}
              <Button
                onClick={() => {
                  handleAddToCart(
                    product.id,
                    product.series.name,
                    product.price,
                    product.series.friendly_id,
                    product.seq_number,
                    product.cover_url
                  );

                  toast({
                    title: "ADDED TO CART",
                    description: `${product.series.name}, Volume ${product.seq_number} added to your cart`,
                  });
                }}
                className="w-full mt-4 rounded-none p-8 text-2xl font-bold"
                disabled={!availableProducts.length}
              >
                {availableProducts.length > 0 ? "ADD TO CART" : "OUT OF STOCK"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Series info */}

      <div className="grid grid-cols-9 mb-16">
        <div className="col-span-3 flex flex-col mt-12">
          <h1 className="font-bold text-6xl">Volume Info</h1>
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
              <VolumeCard
                isOutOfStock={!prevAvailable}
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: prevProduct.id,
                      name: prevProduct.series.name,
                      price: prevProduct.price,
                      quantity: 1,
                      friendly_id: prevProduct.series.friendly_id,
                      seq_number: prevProduct.seq_number,
                      cover_url: prevProduct.cover_url,
                      store_id: prevProduct.store_id,
                    })
                  );
                }}
                volume={prevProduct}
              />
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
                isOutOfStock={!nextAvailable}
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
                      store_id: nextProduct.store_id,
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

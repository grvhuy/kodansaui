"use client";
import Image from "next/image";
import { MyButton } from "../MyButton";
import { Separator } from "../ui/separator";
import Link from "next/link";

interface Volume {
  id: string;
  series: {
    id: string;
    friendly_id: string;
    name: string;
  };
  series_id: string;
  seq_number: number;
  name: string;
  price: number;
  cover_url: string;
  release_date: string;
  pages: number;
  properties: any;
}

const VolumeCard = ({
  volume,
  onClick,
}: {
  volume: Volume;
  onClick: () => void;
}) => {


  return (
    <div>
      <div className="flex space-x-4 my-8 w-full ">
        <div className="bg-[#efefef] hover:bg-[#dddddd] transition duration-500 ease-in-out w-1/3 aspect-[5/6] justify-center items-center flex">
          <div className="relative w-full h-full">
            <Image
              src={volume.cover_url}
              alt="Cover Image"
              fill
              sizes="100vw"
              className="object-contain hover:shadow-sm p-4"
            />
          </div>
        </div>
        <div className="flex w-2/3">
          <div className="flex flex-col justify-between">
            <div>
              <Link
                href={`/product/${volume.series.friendly_id}-${volume.seq_number}`}
                className="font-bold text-3xl hover:underline">
                Volume {volume.seq_number}
              </Link>
              <p className="text-lg text-gray-500">
                {volume.properties?.["Print Release"] || null} | {volume.pages}{" "}
                pages
              </p>
              <a
                href={`
                /product/${volume.series.friendly_id}-${volume.seq_number}
              `}
                className="underline font-semibold"
              >
                DETAILS
              </a>
            </div>

            <div>
              <p className="font-bold text-md text-gray-500">DELUXE EDITION</p>
              <p className="font-bold text-2xl">${volume.price}</p>
              <MyButton text="ADD TO CART" onClick={
                () => onClick()
              } />
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-black" />
    </div>
  );
};

export default VolumeCard;

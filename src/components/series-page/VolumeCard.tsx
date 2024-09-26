"use client";
import Image from "next/image";
import { MyButton } from "../MyButton";
import { Separator } from "../ui/separator";

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
      <div className="flex space-x-4 my-8 mx-6">
        <div>
          <div className="relative aspect-[5/6]">
            <div className="p-8 bg-[#efefef] flex justify-center items-center hover:bg-[#dddddd] hover:shadow-sm transition duration-500 ease-in-out">
              <Image
                src={volume.cover_url}
                alt="Example Image"
                width={140}
                height={140}
                className="object-cover hover:shadow-lg min-w-24"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-3xl">
                VOLUME {volume.seq_number}
              </h3>
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

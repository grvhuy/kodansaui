"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Link from "next/link";
import { VolumeCardSmall } from "./VolumeCardSmall";

interface IProps {
  volumeList: any[];
  currentVol?: number;
}

export function FullSeriesCarousel(props: IProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent>
        {props.volumeList.map((volume, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <Link href={`/product/${volume.friendly_id}-${volume.seq_number}`} onClick={
              () => { console.log(volume); }
            } className="p-1 items-center justify-center flex flex-col">
              <VolumeCardSmall
                friendly_id={volume.friendly_id}
                id={volume.id}
                series_id={volume.series_id}
                seq_number={volume.seq_number}
                cover_url={volume.cover_url}
              />
              {props.currentVol === volume.seq_number && (
                <span className="text-sm font-semibold text-gray-500">You are here!</span>
              )}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

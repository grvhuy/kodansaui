"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ChapterCard } from "./ChapterCard";

interface IProps {
  volumeList: any[];
}

export function ChapterWheelCarousel(props: IProps) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className=""
    >
      <CarouselContent>
        {props.volumeList.map((volume, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Link
              href={`/product/${volume.friendly_id}-${volume.seq_number}`}
              onClick={() => {
                console.log(volume);
              }}
              className="p-1 items-center justify-center"
            >
              <ChapterCard
                id={volume.id}
                friendly_id={volume.id}
                name={volume.volume.series_id}
                cover_url={volume.volume.cover_url}
                author={volume?.author}
                publish_date={volume.volume.publish_date}
                seq_number={volume.volume.seq_number}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:bg-red-600" />
      <CarouselNext />
    </Carousel>
  );
}

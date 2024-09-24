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
  container: any;
  // cardType: string;
}

export function ChapterWheelCarousel(props: IProps) {
  return (
    <div className="flex flex-col mx-16 mt-8">
      <h1 className="text-lg font-semibold uppercase">{props.container.title}</h1>
      <h2 className="text-2xl font-bold uppercase">{props.container.sub_title}</h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className=""
      >
        <CarouselContent>
          {props.container.containers_items.map(
            (volume: any, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 mt-4 "
              >
                <Link
                  href={`/product/${volume.friendly_id}-${volume.seq_number}`}
                  onClick={() => {
                    console.log(volume);
                  }}
                  className="p-1 items-center justify-center"
                >
                  <ChapterCard
                    id={volume.id}
                    friendly_id={volume.volume.series.friendly_id}
                    name={volume.volume.series.name}
                    cover_url={volume.volume.cover_url}
                    author={volume?.author}
                    publish_date={volume.volume.publish_date}
                    seq_number={volume.volume.seq_number}
                  />
                </Link>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-red-600" />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

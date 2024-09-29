"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VolumeCard } from "./VolumeCard";

interface IProps {
  container: any;
}

export function VolumeWheelCarousel(props: IProps) {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-lg font-semibold uppercase">{props.container.title}</h1>
      <h2 className="text-2xl font-bold uppercase">{props.container.sub_title}</h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className=""
      >
        <CarouselContent className="mt-4">
          {props.container.containers_items.map(
            (volume: any, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div
                  // href={`/product/${volume.friendly_id}-${volume.seq_number}`}
                  onClick={() => {
                    console.log(volume);
                  }}
                  className="items-center justify-center"
                >
                  <VolumeCard
                    id={volume.id}
                    friendly_id={volume.volume.series.friendly_id}
                    name={volume.volume.series.name}
                    cover_url={volume.volume.cover_url}
                    author={volume?.author}
                    publish_date={volume.volume.publish_date}
                    seq_number={volume.volume.seq_number}
                    cover_color={volume.volume.series.cover_color}
                  />
                </div>
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

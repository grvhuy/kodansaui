import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VolumeCardSmall } from "./VolumeCardSmall";
import Link from "next/link";

interface IProps {
  volumeList: any[];
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
            }  className="p-1">
              <VolumeCardSmall
                friendly_id={volume.friendly_id}
                id={volume.id}
                series_id={volume.series_id}
                seq_number={volume.seq_number}
                cover_url={volume.cover_url}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

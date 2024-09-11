import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { VolumeCardSmall } from "./VolumeCardSmall"

interface props {
  volumeList: any[];
}

export function FullSeriesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <VolumeCardSmall 
                id="1" 
                series_id="1" 
                seq_number={1} 
                cover_url="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/540_026348a1-c80b-4db5-8b45-873d55b87abd.jpg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

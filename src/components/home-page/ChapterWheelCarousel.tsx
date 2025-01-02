"use client";
import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChapterCard } from "./ChapterCard";

interface IProps {
  container: any;
  // cardType: string;
}

export function ChapterWheelCarousel(props: IProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  // const [slideNumber, setSlideNumber] = React.useState(4);
  const containers_items_doubled = [...props.container.containers_items];
  const groupNumber = (props.container.containers_items.length / 4) * 2;
  const [currentGroup, setCurrentGroup] = React.useState(1);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleScrollToGroup = (groupIndex: number) => {
    if (!api) return;
    // 0 1 2 3 4 5 6 7 8 9 10 11
    // 1       2       3    group index

    const targetIndex = (groupIndex - 1) * 4;

    api.scrollTo(targetIndex);

    setCurrent(groupIndex);
    setCurrentGroup(groupIndex);
  };

  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-lg font-semibold uppercase">
        {props.container.title}
      </h1>
      <h2 className="text-2xl font-bold uppercase">
        {props.container.sub_title}
      </h2>

      <Carousel
      
        opts={{
          align: "center",
        }}
        className=""
        setApi={setApi}
      >
        {/*         <div className="absolute right-0 -top-2">
          {Array.from({ length: groupNumber }).map((_, index) => {
            const start = index * 4 + 1;
            const end = start + 3;
            return (
              <button
                onClick={() => {
                  const newGroupIndex = index + 1;
                  setCurrentGroup(newGroupIndex);
                  handleScrollToGroup(newGroupIndex);
                  setCurrent(start);
                }}
                key={index}
                className={`right-0 min-w-12 h-2 ${
                  current >= start && current <= end
                    ? "bg-black"
                    : "bg-gray-500"
                }`}
              >
              </button>
            );
          })}
        </div> */}
        <CarouselContent className="mt-4">
          {containers_items_doubled.map((volume: any, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div
                // href={`/product/${volume.friendly_id}-${volume.seq_number}`}
                onClick={() => {
                  console.log(volume);
                }}
                className="items-center justify-center"
              >
                <ChapterCard
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
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-red-600" />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

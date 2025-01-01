"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { NewsWheelCard } from "./NewsWheelCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getNews } from "@/utils/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface IProps {
  container: any;
}

export const NewsWheel = (props: IProps) => {
  const router = useRouter();
  const [news, setNews] = useState<any[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      getNews().then((data) => {
        console.log("Fetched data:", data);
        setNews(data);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="mt-16 flex flex-col">
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
        className="w-full"
      >
        <CarouselContent>
          {news.map((item: any, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <NewsWheelCard
                key={index}
                thumbnail_url={item.thumbnail_url}
                title={item.title}
                publish_date={item.publish_date}
                friendly_id={item.friendly_id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-full flex justify-end mt-8">
        <Button
          type="submit"
          onClick={() => {
            router.push("/news");
          }}
          variant="ghost"
          className=" group text-black space-x-2 border-2 rounded-none border-black hover:bg-black hover:text-white font-semibold flex justify-between m-0 p-0 pl-4 pr-3 hover:border-white"
        >
          <h3 className="mr-2">VIEW MORE</h3>

          {/* <span className="border-l-2 h-full border-black"></span> */}
          <Separator
            className="border-[1px] border-black h-full group-hover:border-white"
            orientation="vertical"
          />
          <ArrowRight
            className="h-full w-full mr-2 transition-transform duration-300 transform group-hover:translate-x-1"
            size={24}
          />
        </Button>
      </div>
    </div>
  );
};

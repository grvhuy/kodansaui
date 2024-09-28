"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { NewsWheelCard } from "./NewsWheelCard";
import { useRouter } from "next/navigation";

interface IProps {
  container: any;
}

export const NewsWheel = (props: IProps) => {
  const router = useRouter()
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-lg font-semibold uppercase">{props.container.title}</h1>
      <h2 className="text-2xl font-bold uppercase">
        {props.container.sub_title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {props.container.containers_items.map((news: any, index: number) => (
          <NewsWheelCard
            thumbnail_url={news.news.thumbnail_url}
            title={news.news.title}
            key={index}
            publish_date={news.news.publish_date}
            friendly_id={news.news.friendly_id}
          />
        ))}
        {props.container.containers_items.map((news: any, index: number) => (
          <NewsWheelCard
            thumbnail_url={news.news.thumbnail_url}
            title={news.news.title}
            key={index}
            publish_date={news.news.publish_date}
            friendly_id={news.news.friendly_id}
          />
        ))}
        {props.container.containers_items.map((news: any, index: number) => (
          <NewsWheelCard
            thumbnail_url={news.news.thumbnail_url}
            title={news.news.title}
            key={index}
            publish_date={news.news.publish_date}
            friendly_id={news.news.friendly_id}
          />
        ))}
      </div>
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

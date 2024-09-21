"use client";
import { ChapterCard } from "@/components/ChapterCard";
import { ChapterWheelCarousel } from "@/components/ChapterWheelCarousel";
import { MyButtonForward } from "@/components/MyButtonFoward";
import { getColorFromString } from "@/lib/utils";
import { getContainers } from "@/utils/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [containers, setContainers] = useState<any[]>([]);
  const [headerItem, setHeaderItem] = useState<any>(null);
  const [headerContainer, setHeaderContainer] = useState<any>(null);

  useEffect(() => {
    const fetchContainers = async () => {
      const response = await getContainers();
      setContainers(response);
      setHeaderItem(response[0].containers_items[0]);
      setHeaderContainer(response[0]);
    };
    fetchContainers();
  }, []);

  useEffect(() => {
    console.log("containers: ", containers);
    console.log("header item: ", headerItem);
    console.log("header container: ", headerContainer);
  }, [containers]);

  return (
    <div className="bg-white min-h-screen pb-20 gap-16 h-full">
      {/* Tin chinh */}
      <div className="w-full h-[300px] md:h-[600px] flex items-center justify-center mb-12 relative ">
        {headerItem && (
          <Image
            onClick={() => {
              router.push(`/series/${headerItem.series.friendly_id}`);
            }}
            src={headerItem.series.thumbnail_url}
            alt="Hero Image"
            objectFit="cover"
            // objectPosition="md:1px md:-200px"
            layout="fill"
            className="border-b-2 border-b-black"
          />
        )}
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.5)] mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundColor: `${getColorFromString("cluelaseesssss")}`,
          }}
        ></div>

        <div className="absolute z-10 bg-white left-16 -bottom-8 border-2 border-black w-1/2 p-4 md:block hidden">
          <h1 className="font-semibold text-xl">{headerContainer?.title}</h1>
          <p className="font-extrabold text-5xl">{headerItem?.series.name}</p>
          <div className="flex justify-between">
            <p className="text-white font-semibold">
              {/* {headerItem.series.tags.map((tag: any, index: number) => {
                <span className="bg-[#fffefb]">
                  {tag}
                </span>
              })} */}
            </p>
            <MyButtonForward
              text="VIEW MORE INFO"
              onClick={() => {
                router.push(`/series/${headerItem.series.friendly_id}`);
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        {/* <ChapterCard
          id="123"
          friendly_id="asdqwdqd"
          name="Example Name"
          cover_url="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z"
          author="Author"
          publish_date="2024-09-08T09:52:48.780Z"
          seq_number={1}
        /> */}
      </div>
      {/* Chapter wheel */}
      <div className="mt-12">
        {containers &&
          containers.map((container, index) => (
            <div className="mx-16" key={index}>
              {container.type == "chapter-wheel" && (
                <div>
                  <h1 className="font-semibold text-lg">{container.title}</h1>
                  <h2 className="font-extrabold text-2xl">{container.sub_title}</h2>
                  <ChapterWheelCarousel volumeList={container.containers_items}/>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

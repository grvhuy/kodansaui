"use client";

import { getColorFromString } from "@/lib/utils";
import Image from "next/image";
import { MyButtonForward } from "../MyButtonFoward";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IProps {
  container: any;
  headerItem: any;
}

export const HeaderSection = (props: IProps) => {
  const router = useRouter();

  return (
    <div className="w-full h-[300px] md:h-[600px] flex items-center justify-center mb-12 relative ">
      {props.headerItem && (
        <Link className="cursor-pointer" href={`/series/${props.headerItem.series.friendly_id}`}>
          <Image
            src={props.headerItem.series.thumbnail_url}
            alt="Hero Image"
            objectFit="cover"
            // objectPosition="md:1px md:-200px"
            layout="fill"
            className="border-b-2 border-b-black"
          />
        </Link>
      )}
      <div
        onClick={() => {
          router.push(`/series/${props.headerItem.series.friendly_id}`);
        }}
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)] mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundColor: `${getColorFromString("cluelaseesssss")}`,
        }}
      ></div>

      <div className="absolute z-10 bg-white left-16 -bottom-8 border-2 border-black w-1/2 p-4 md:block hidden">
        <h1 className="font-semibold text-xl">{props.container?.title}</h1>
        <p className="font-extrabold text-5xl">
          {props.headerItem?.series.name}
        </p>
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
              router.push(`/series/${props.headerItem.series.friendly_id}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

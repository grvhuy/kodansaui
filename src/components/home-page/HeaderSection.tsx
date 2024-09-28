"use client";
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
    <div className="w-screen h-[80vh] flex items-center">
      {props.headerItem && (
        <Link className="absolute inset-0 w-full h-[80vh] cursor-pointer" href={`/series/${props.headerItem.series.friendly_id}`}>
          <Image
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
            src={props.headerItem.series.thumbnail_url}
            alt="Hero Image"
            className="border-b-2 border-b-black"
          />
        </Link>
      )}
      <div className="z-10 bg-white border-2 border-black p-4 md:block hidden mt-[80vh]">
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
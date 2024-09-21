import { getColorFromString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface IProps {
  id: string;
  friendly_id: string;
  name: string;
  cover_url: string;
  author: string;
  publish_date: string;
  seq_number: number;
}

export const ChapterCard = (props: IProps) => {
  return (
    <div>
      <Link href="#" className="my-2 relative group">
        <Image
          src={props.cover_url}
          alt="Example Image"
          objectFit="cover"
          layout="responsive"
          width={300}
          height={300}
          className={`grayscale aspect-square object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 `}
        />

        {/* Lớp phủ màu ngẫu nhiên */}
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.5)] mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          style={{
            backgroundColor: `${getColorFromString(props.name)}`,
          }}
        ></div>
      </Link>
      <div className="flex flex-col mt-2">
        <span className="font-bold text-lg">
          {props.name}
        </span> 
        <span className="text-sm">
          Vol. {props.seq_number}
        </span>
        <span className="text-sm mt-1">
          {props.publish_date}
        </span>
        
        <p
          className="mt-2 font-medium text-sm border-b-2 border-gray-500 w-fit cursor-pointer"
          onClick={() => {
            console.log("Read chapter");
          }}
        >
          VIEW DETAIL
        </p>
      </div>
    </div>
  );
};

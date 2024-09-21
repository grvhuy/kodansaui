import { getColorFromString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  id: string;
  friendly_id: string;
  name: string;
  cover_url: string;
  thumbnail_url: string;
  type: string;
  author: string;
}

export const SearchResultCard = (props: IProps) => {
  return (
    <Link href="#" className="my-2">
      <Image
        src="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z"
        width={240}
        height={240}
        alt="Example Image"
        className="aspect-[5/6] object-cover"
      />
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)] mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundColor: `${getColorFromString(props.friendly_id)}`,
        }}
      ></div>
      <span className="font-bold text-lg">
        <h2>
          {props.name}
           {/* - {props.author} */}
        </h2>
      </span>
    </Link>
  );
};

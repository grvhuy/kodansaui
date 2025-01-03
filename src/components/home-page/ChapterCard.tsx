import { toPastel } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  id: string;
  friendly_id: string;
  name: string;
  cover_url: string;
  author: string;
  publish_date: string;
  seq_number: number;
  cover_color: string;
}

export const ChapterCard = (props: IProps) => {
  return (
    <div>
      <Link
        title={props.name}
        href={`/product/${props.friendly_id}-${props.seq_number}`}
        className="my-2 group"
      >
        <div className="aspect-square relative w-full">
          <Image
            src={props.cover_url}
            alt="Example Image"
            fill
            sizes="100vw"
            className={`
          
            aspect-square object-cover hover:shadow-lg hover:scale-105 transition-transform duration-300 `}
          />

          {/* <div
            className={`absolute inset-0 mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
            style={{
              backgroundColor: `${toPastel(props.cover_color)}`,
            }}
          ></div> */}
        </div>
      </Link>
      <div className="flex flex-col mt-2">
        <span className="font-bold text-lg truncate">{props.name}</span>
        <span className="text-sm">Vol. {props.seq_number}</span>
        <span className="text-sm mt-1">{props.publish_date}</span>

        <a
          title={props.name}
          className="mt-2 font-medium text-sm border-b-2 border-gray-500 w-fit"
          href={`/product/${props.friendly_id}-${props.seq_number}`}
        >
          VIEW DETAIL
        </a>
      </div>
    </div>
  );
};

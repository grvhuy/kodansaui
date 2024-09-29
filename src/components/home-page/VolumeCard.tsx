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

export const VolumeCard = (props: IProps) => {
  return (
    <div>
      <Link
        title={props.name}
        href={`/product/${props.friendly_id}-${props.seq_number}`}
        className="my-2 group "
      >
        <div className="aspect-square relative w-full bg-[#efefef] hover:bg-[#dddddd] transition-all duration-500 fade-in-20">
          <Image
            src={props.cover_url}
            alt="Example Image"
            fill
            sizes="100vw"
            className={`object-contain hover:shadow-sm p-4 aspect-4/3`}
          />
        </div>
      </Link>
      <div className="flex flex-col mt-2">
        <a
          title={props.name}
          className="mt-2 font-bold border-gray-500 w-fit"
          href={`/product/${props.friendly_id}-${props.seq_number}`}
        >
          {props.name}
        </a>
      </div>
    </div>
  );
};

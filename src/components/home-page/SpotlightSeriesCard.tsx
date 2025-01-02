"use client";
import Image from "next/image";
import Link from "next/link";
import { MyButtonForward } from "../MyButtonFoward";
import { useRouter } from "next/navigation";

interface IProps {
  friendly_id: string;
  cover_url: string;
  thumbnail_url: string;
  name: string;
  authors: any[];
}

export const SpotlightSeriesCard = (props: IProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full">
      <Link href={`/series/${props.friendly_id}`} className="my-2  group">
        <div className="w-full relative aspect-video">
          <Image
            fill
            sizes="100vw"
            src={props.thumbnail_url}
            alt="Example Image"
            className={`aspect-[5/3] object-cover hover:shadow-lg`}
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-lg font-semibold line-clamp-2 mr-4">
            {props.name}
          </p>

          <MyButtonForward
            text="Read"
            onClick={() => {
              router.push(`/series/${props.friendly_id}`);
            }}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex">
            {props.authors.length == 1 && (
              <p className="text-md text-gray-500">
                {props.authors[0].authors.name}
              </p>
            )}
            {props.authors.length > 1 && (
              <p className="text-md text-gray-500">
                {props.authors.map((author, index) => {
                  if (index === 0) return author.authors.name;
                  if (index === props.authors.length - 1)
                    return ` and ${author.authors.name}`;
                  return `, ${author.authors.name}`;
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

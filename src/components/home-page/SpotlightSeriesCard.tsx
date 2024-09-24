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
    <div className="flex flex-col mr-8">
      <Link
        href={`/series/${props.friendly_id}`}
        className="my-2 relative group"
      >
        <Image
          src={props.thumbnail_url}
          alt="Example Image"
          objectFit="cover"
          layout="responsive"
          width={300}
          height={300}
          className={`aspect-[5/3] object-cover hover:shadow-lg`}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div
            onClick={() => router.push(`/series/${props.friendly_id}`)}
            className="flex flex-col cursor-pointer"
          >
            <p className="text-lg font-semibold line-clamp-2 w-fit">{props.name}</p>
            <div className="flex">
              {props.authors.length == 1 && (
                <p className="text-md text-gray-500">
                  {props.authors[0].authors.name}
                </p>
              )}
              {props.authors.length > 1 &&
                props.authors.map((author, index) => (
                  <div>
                    <p className="text-md text-gray-500">
                      {author.index == 0 && author.authors.name}
                      {author.index > 0 &&
                        index !== props.authors.length - 1 &&
                        `, ${author.authors.name}`}
                    </p>
                    <span className="ml-1 text-md text-gray-500">
                      {index == props.authors.length - 1 &&
                        ` and ${author.authors.name}`}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <MyButtonForward
            text="Read"
            onClick={() => {
              router.push(`/series/${props.friendly_id}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

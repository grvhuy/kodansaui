"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  name: string;
  friendlyId: string;
  coverUrl: string;
  coverColor: string;
}

const SearchResultCardHome = (props: IProps) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer h-20"
      onClick={() => router.push(`/series/${props.friendlyId}`)}
    >
      <div className="aspect-square relative h-full">
        <Image
          src={props.coverUrl}
          alt="Example Image"
          fill
          sizes="100vw"
          className="grayscale object-cover hover:shadow-lg"
        />
      </div>
      <div>
        <h2 className="font-bold text-lg">{props.name}</h2>
      </div>
    </div>
  );
};

export default SearchResultCardHome;

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
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => router.push(`/series/${props.friendlyId}`)}
    >
      <Image
        src={props.coverUrl}
        alt="Example Image"
        height={80}
        width={80}
        className="grayscale aspect-[5/6] object-cover hover:shadow-lg"
      />
      <div>
        <h2 className="font-bold text-lg">{props.name}</h2>
      </div>
    </div>
  );
};

export default SearchResultCardHome;

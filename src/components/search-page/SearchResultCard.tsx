import Image from "next/image";
import Link from "next/link";

interface IProps {
  id: string;
  friendly_id: string;
  name: string;
  cover_url: string;
  thumbnail_url: string;
}

export const SearchResultCard = () => {
  return (
    <Link href="#" className="my-2">
      <Image
        src="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z"
        width={240}
        height={240}
        alt="Example Image"
        className="aspect-[5/6] object-cover"
      />
      <span className="font-bold text-lg">
        <h2>Series Name</h2>
      </span>
    </Link>
  );
};

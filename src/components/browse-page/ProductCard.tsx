import Image from "next/image";
import Link from "next/link";
interface IProps {
  id: string;
  friendly_id: string;
  name: string;
  // rating: number;
  // status: string;
  // description: string;
  // tags: string[];
  // type: string;
  cover_url: string;
  thumbnail_url: string;
  cover_color: string;
}

const ProductCard = (props: IProps) => {
  return (
    <div className="flex flex-col w-full">
      <Link
        href={`series/${props.friendly_id}`}
        style={{ backgroundColor: `${props.cover_color}` }}
        className="relative group aspect-[3/4] w-full">
        {/* Ảnh Manga */}
        <Image
          src={props.cover_url}
          alt="Example Image"
          fill
          sizes="100vw"
          className="grayscale object-cover hover:shadow-lg w-full"
        />
      </Link>
      <div>
        <Link
          title={props.name}
          href={`series/${props.friendly_id}`}
          className="font-semibold text-lg line-clamp-2"
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

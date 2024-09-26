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
    <div className="flex flex-col ms-4">
      <Link href={`series/${props.friendly_id}`} className="relative group">
        {/* Ảnh Manga */}
        <Image
          src={props.cover_url}
          alt="Example Image"
          height={240}
          width={240}
          className="grayscale aspect-[5/6] object-cover hover:shadow-lg w-full"
        />

        {/* Lớp phủ màu ngẫu nhiên */}
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.5)] mix-blend-overlay opacity-40 group-hover:opacity-75 transition-opacity duration-300"
          style={{
            backgroundColor: `${props.cover_color}`,
          }}
        ></div>
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

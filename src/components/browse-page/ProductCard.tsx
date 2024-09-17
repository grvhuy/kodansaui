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
}

const ProductCard = (props: IProps) => {
  return (
    <div className="flex flex-col ms-4">
      <Link href={`series/${props.friendly_id}`} className="relative">
        <Image
          src={props.cover_url}
          alt="Example Image"
          height={240}
          width={240}
          className=" aspect-[5/6] object-cover hover:shadow-lg min-w-24 max-h-80"
        />
      </Link>

      <div>
        <Link href={`series/${props.friendly_id}`} className="font-semibold text-lg">
          {props.name}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

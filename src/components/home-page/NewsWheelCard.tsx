import Image from "next/image";
import Link from "next/link";

interface IProps {
  friendly_id: string;
  publish_date: string;
  title: string;
  thumbnail_url: string;
}

export const NewsWheelCard = (props: IProps) => {
  return (
    <div className="flex flex-col mr-8">
      <Link href={
        `/news/${props.friendly_id}`
      } className="my-2 relative group">
        <h1 className="text-md font-medium line-clamp-2">{props.publish_date}</h1>
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
          <div className="flex flex-col">
            <p className="text-lg font-semibold line-clamp-2">{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

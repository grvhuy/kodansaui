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
    <div title={props.title} className="flex flex-col">
      <h1 className="text-md line-clamp-2 italic">{new Date(props.publish_date).toDateString()}</h1>
      <Link
        href={`/news/${props.friendly_id}`}
        className="my-2 relative group aspect-video w-full"
      >
        <Image
          src={props.thumbnail_url}
          alt="Example Image"
          fill
          sizes="100vw"
          className={`object-cover hover:shadow-lg`}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-lg font-semibold line-clamp-2 cursor-pointer">{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";

interface IProps {
  image_url: string;
  publish_date: Date;
  title: string;
  onClick: () => void;
}

export const NewsCard = (props: IProps) => {
  return (
    <div
      title={props.title}
      onClick={props.onClick}
      className="flex flex-col mr-12"
    >
      <h1 className="italic text-md">
        {new Date(props.publish_date).toDateString()}
      </h1>
      <Image
        src={props.image_url}
        alt="Example Image"
        height={540}
        width={540}
        className=" aspect-[3/2] object-cover hover:shadow-lg min-w-24 max-h-80"
      />
      <h1 className="font-bold text-xl line-clamp-2 cursor-pointer">{props.title}</h1>
    </div>
  );
};

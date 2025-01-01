import Image from "next/image"

interface IProps {
  image_url: string;
  publish_date: Date;
  title: string;
  onClick: () => void;
}

export const NewsCard = (props: IProps) => {
  return (
    <div onClick={props.onClick} className="flex flex-col ml-4">
      <h1>{props.publish_date.toLocaleDateString()}</h1>
      <Image
        src= {props.image_url}
        alt="Example Image"
        height={540}
        width={540}
        className=" aspect-[3/2] object-cover hover:shadow-lg min-w-24 max-h-80"
      />
      <h1 className="font-bold text-xl">{props.title}</h1>
    </div>
  )
}
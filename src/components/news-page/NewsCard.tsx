import Image from "next/image"

interface IProps {
  onClick: () => void;
}

export const NewsCard = (props: IProps) => {
  return (
    <div onClick={props.onClick} className="flex flex-col ml-4">
        <h1>Sep. 10, 2024</h1>
        <Image
          src="
          https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/BakemonogatariManga_Series_IMG_1200x960.webp?t=2024-09-08T09%3A52%3A48.780Z
          "
          alt="Example Image"
          height={540}
          width={540}
          className=" aspect-[3/2] object-cover hover:shadow-lg min-w-24 max-h-80"
        />
        <h1 className="font-bold text-xl">Get gritty manga starting at 99¢ during the Kodansha Grindhouse digital sale</h1>
    </div>
  )
}
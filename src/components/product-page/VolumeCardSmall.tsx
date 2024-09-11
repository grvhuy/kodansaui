import Image from "next/image";

interface IProps {
  id: string;
  series_id: string;
  seq_number: number;
  cover_url: string;
}


export const VolumeCardSmall = (props: IProps) => {
  return (
    <div>
      <div className="relative aspect-[5/6]">
        <div className="p-8 bg-[#efefef] flex justify-center items-center hover:bg-[#dddddd] hover:shadow-sm transition duration-500 ease-in-out">
          <Image
            src={props.cover_url}
            alt="Example Image"
            width={140}
            height={140}
            className="object-cover hover:shadow-lg min-w-24"
          />
        </div>
          <p className="text-center text-lg font-bold mt-2">{props.seq_number}</p>
      </div>
    </div>
  );
};

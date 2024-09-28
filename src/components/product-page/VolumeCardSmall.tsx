import Image from "next/image";

interface IProps {
  id: string;
  series_id: string;
  seq_number: number;
  cover_url: string;
  friendly_id: string;
}


export const VolumeCardSmall = (props: IProps) => {
  return (
    <div className="flex w-full">
      <div className="relative w-full">
        <div className="bg-[#efefef] hover:bg-[#dddddd] transition duration-500 ease-in-out aspect-[5/6] justify-center items-center flex">
          <div className="relative w-full h-full">
            <Image
              src={props.cover_url}
              alt="Cover Image"
              fill
              sizes="100vw"
              className="object-contain hover:shadow-sm p-4"
            />
          </div>
        </div>
        <p className="text-center text-lg font-bold mt-2">{props.seq_number}</p>
      </div>
    </div>
  );
};

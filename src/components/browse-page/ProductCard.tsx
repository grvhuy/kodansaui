import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex flex-col ms-4">
      <div className="relative">
        <Image
          src="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/540_026348a1-c80b-4db5-8b45-873d55b87abd.jpg"
          alt="Example Image"
          height={240}
          width={240}
          className="object-cover hover:shadow-lg min-w-24 max-h-80"
        />
      </div>

      <div>
        <h1 className="font-semibold text-lg">Product name</h1>
      </div>

    </div>
  );
};

export default ProductCard;

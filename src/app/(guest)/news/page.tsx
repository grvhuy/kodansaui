"use client";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { NewsCard } from "@/components/news-page/NewsCard";
import { useRouter } from "next/navigation";

const NewsPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col mb-64">
      {/* BANNER */}
      <div className="bg-pink-500 w-full h-[500px] flex items-center justify-center mb-12">
        <h1 className="text-white font-bold">NEWS PAGE BANNER HERE</h1>
      </div>
      {/* Page content */}
      <h1 className="text-6xl font-extrabold">News</h1>
      <div className="flex mt-16 space-x-16 md:space-x-48">
        <div className="flex flex-col">
          <h1 className="font-bold">Sort by:</h1>
          <MyDropdownMenu
            title="Sort"
            onClick={(index: number) => {
              console.log(index);
            }}
            items={["Oldest", "Newest"]}
          />
        </div>

        <div className="grid grid-cols-2 ">
          <NewsCard
            onClick={() => {
              router.push("/news/example");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default NewsPage;

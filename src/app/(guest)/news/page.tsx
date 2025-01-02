"use client";
import MyDropdownMenu from "@/components/MyDropdownMenu";
import { NewsCard } from "@/components/news-page/NewsCard";
import { getNews } from "@/utils/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const router = useRouter();
  const [newsList, setNewsList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      getNews().then((data) => {
        setNewsList(data);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      {/* BANNER */}
      <div className="absolute inset-0 w-full h-[60vh] cursor-pointer">
        <Image
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/News/dd7eee7a9a6e11df57f0.jpg"
          alt="Hero Image"
          className="border-b-2 border-b-black"
          fill
        />
      </div>
      {/* Page content */}
      <div className="mt-[60vh] py-16">
        <h1 className="text-6xl font-extrabold">News</h1>
        <div className="flex mt-16 space-x-16 md:space-x-48">
          {/* <div className="flex flex-col">
          <h1 className="font-bold">Sort by:</h1>
          <MyDropdownMenu
            title="Sort"
            onClick={(index: number) => {
              console.log(index);
            }}
            items={["Oldest", "Newest"]}
          />
        </div> */}

          <div className="grid grid-cols-2 mb-4">
            {newsList &&
              newsList.map((news: any) => (
                <NewsCard
                  key={news.id}
                  image_url={news.thumbnail_url}
                  publish_date={new Date(news.publish_date)}
                  title={news.title}
                  onClick={() => {
                    router.push(`/news/${news.friendly_id}`);
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsPage;

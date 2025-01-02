"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNewsByFriendlyUrl } from "@/utils/api";
import Image from "next/image";

export default function NewsDetailPage() {
  const pathName = usePathname();
  const friendly_id = pathName.split("/").pop();
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      getNewsByFriendlyUrl(friendly_id as string).then((data) => {
        console.log("Fetched data:", data);
        setNews(data);
      });
    };
    fetchData();
  }, [friendly_id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center mx-auto md:w-3/4 lg:w-full mt-32">
      <div className="absolute font-semibold inset-0 w-full h-[70vh] flex flex-col items-center mt-24">
        <h1 className="text-3xl w-4/5">{news[0].title}</h1>
        <h2 className="text-xl w-4/5">{new Date(news[0].publish_date).toDateString()}</h2>
        <div className="relative h-full w-4/5">
          <Image
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
            src={news[0].thumbnail_url}
            alt="Hero Image"
            fill
          />
        </div>
      </div>
      <div className="content mt-[70vh] pb-16" dangerouslySetInnerHTML={{ __html: news[0].content }} />
    </div>
  );
}


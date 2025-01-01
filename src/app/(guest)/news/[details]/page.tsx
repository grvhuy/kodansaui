"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNewsByFriendlyUrl } from "@/utils/api";

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

  console.log("News content:", news.content);

  return (
    <div className="mt-24">
      <div dangerouslySetInnerHTML={{ __html: news[0].content }} />
    </div>
  );
}

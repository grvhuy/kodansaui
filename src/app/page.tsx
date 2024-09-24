"use client";

import { HomeContainer } from "@/components/home-page/HomeContainer";
import { getContainers } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [containers, setContainers] = useState<any[]>([]);
  const [headerItem, setHeaderItem] = useState<any>(null);
  const [headerContainer, setHeaderContainer] = useState<any>(null);

  useEffect(() => {
    const fetchContainers = async () => {
      const response = await getContainers();
      const sortByIndexContainer = response.sort((a: any, b: any) => a.index - b.index);
      setContainers(sortByIndexContainer);
      setHeaderItem(response[0].containers_items[0]);
      setHeaderContainer(response[0]);
    };
    fetchContainers();
  }, []);

  useEffect(() => {
    console.log("containers: ", containers);
    console.log("header item: ", headerItem);
    console.log("header container: ", headerContainer);
  }, [containers]);

  return (
    <div className="w-full overflow-x-hidden">
      <HomeContainer
        containers={containers}
      />

    </div>
  );
}

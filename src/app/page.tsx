"use client";

import { HomeContainer } from "@/components/home-page/HomeContainer";
import { getContainers } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [containers, setContainers] = useState<any[]>([]);

  useEffect(() => {
    const fetchContainers = async () => {
      const response = await getContainers();
      setContainers(response);
    };
    fetchContainers();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <HomeContainer
        containers={containers}
      />
    </div>
  );
}

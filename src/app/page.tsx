"use client";

import { HomeContainer } from "@/components/home-page/HomeContainer";
import { getContainers } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [containers, setContainers] = useState<any[]>([]);

  useEffect(() => {
    const fetchContainers = async () => {
      const response = await getContainers();
      console.log(response);
      setContainers(response);
    };
    fetchContainers();
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {containers.length > 0 && <HomeContainer containers={containers} />}
    </div>
  );
}

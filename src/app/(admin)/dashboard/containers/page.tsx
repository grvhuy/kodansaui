"use client";
import { getContainers } from "@/utils/api";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface Author {
  index: number;
  authors: {
    name: string;
  };
}

interface Series {
  name: string;
  cover_url: string;
  cover_color: string;
  friendly_id: string;
  thumbnail_url: string;
  series_authors: Author[];
  recent_publish_date: string | null;
}

interface News {
  title: string;
  friendly_id: string;
  publish_date: string;
  thumbnail_url: string;
}

interface Volume {
  price: number;
  series: {
    name: string;
    cover_color: string | null;
    friendly_id: string;
  };
  cover_url: string;
  seq_number: number;
  publish_date: string;
}

export interface ItemInterface {
  id: string | number;
  selected?: boolean;
  chosen?: boolean;
  filtered?: boolean;
  [property: string]: any;
}

interface ContainerItem extends ItemInterface {
  news: News | null;
  type: string;
  index: number;
  series: Series | null;
  volume: Volume | null;
  display_type: string;
}

interface Container extends ItemInterface {
  created_at: string;
  index: number;
  type: string;
  title: string;
  sub_title: string | null;
  containers_items: ContainerItem[];
}

const ContainerSortable = () => {
  const [containers, setContainers] = useState<Container[]>([]);
  useEffect(() => {
    getContainers().then((data) => {
      console.log(data);
      setContainers(data);
    });
  }, []);

  const handleSort = (newState: Container[]) => {
    setContainers(
      newState.map((container, index) => ({
        ...container,
        id: index,
      }))
    );
    console.log(newState);
  };

  return (
    <ReactSortable
      className="flex flex-col w-full cursor-move"
      list={containers}
      setList={handleSort}
    >
      {containers.length > 0 && containers.map((container, index) => (
        <div
          key={container.index}
          className="border border-gray-300 rounded-lg p-5 my-3 bg-white shadow-md w-full"
        >
          <DragHandleHorizontalIcon />
          <h3 className="text-lg font-bold">{container.title}</h3>
          {container.sub_title && (
            <h4 className="text-sm text-gray-600">{container.sub_title}</h4>
          )}
          <div className="flex flex-col">
            {container.containers_items.map((item) => (
              <div
                key={item.index}
                className="border border-gray-200 rounded-lg p-3 my-2 bg-gray-50"
              >
                {/* {item.type === "Series" && item.series && (
                  <div className="flex flex-col">
                    <h5 className="font-semibold">{item.series.name}</h5>
                    <div className="flex">
                      <img
                        src={item.series.thumbnail_url}
                        alt={item.series.name}
                        className="w-36 h-36 mb-2 rounded"
                      />
                      <p className="text-sm">
                        Authors:{" "}
                        {item.series.series_authors
                          .map((author) => author.authors.name)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                )}
                {item.type === "News" && item.news && (
                  <>
                    <h5 className="font-semibold">{item.news.title}</h5>
                    <img
                      src={item.news.thumbnail_url}
                      alt={item.news.title}
                      className="w-24 h-36 mb-2 rounded"
                    />
                    <p className="text-sm">
                      Published on: {item.news.publish_date}
                    </p>
                  </>
                )}
                {item.type === "Chapter" && item.volume && (
                  <>
                    <h5 className="font-semibold">
                      Chapter: {item.volume.series.name}
                    </h5>
                    <img
                      src={item.volume.cover_url}
                      alt={item.volume.series.name}
                      className="w-8 h-8 mb-2 rounded"
                    />
                    <p className="text-sm">
                      Price: ${item.volume.price.toFixed(2)}
                    </p>
                  </>
                )} */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </ReactSortable>
  );
};

export default ContainerSortable;

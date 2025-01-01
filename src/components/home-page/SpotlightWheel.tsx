"use client"

import { SpotlightSeriesCard } from "./SpotlightSeriesCard";

interface IProps {
  container: any;
}

export const SpotlightWheel = (props: IProps) => {

  return (
    <div className="mt-24">
      <div>
        <h1 className="text-2xl font-bold uppercase">{props.container.title}</h1>
        <h2 className="text-2xl font-bold uppercase">{props.container.sub_title}</h2>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
        {props.container.containers_items.map((item: any, index: string) => (
          <SpotlightSeriesCard
            key={index}
            thumbnail_url={item.series.thumbnail_url}
            friendly_id={item.series.friendly_id}
            cover_url={item.series.cover_url}
            name={item.series.name}
            authors={item.series.series_authors}
          />
        ))}
      </div>
    </div>
  );
};

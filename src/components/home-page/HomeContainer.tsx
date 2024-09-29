"use client";

import { ChapterWheelCarousel } from "./ChapterWheelCarousel";
import { HeaderSection } from "./HeaderSection";
import { NewsWheel } from "./NewsWheel";
import { SpotlightWheel } from "./SpotlightWheel";
import { VolumeWheelCarousel } from "./VolumeWheelCarousel";

interface IProps {
  containers: any[];
}

export const HomeContainer = (props: IProps) => {
  return (
    <div className="bg-white min-h-screen pb-20 gap-16 h-full">
      {props.containers.map((container, index) => (
        <div key={index}>
          {container.type === "news-header" && (
            <HeaderSection
              container={container}
              headerItem={container.containers_items[0]}
            />
          )}
          {container.type === "spotlight-series" && (
            <SpotlightWheel container={container} />
          )}
          {container.type === "chapter-wheel" && (
            <>
              <ChapterWheelCarousel container={container} />
            </>
          )}
          {container.type === "news-wheel" && (
            <NewsWheel container={container} />
          )}
          {container.type === "volume-wheel" && (
            <VolumeWheelCarousel container={container} />
          )}
        </div>
      ))}
    </div>
  );
};

import { SeriesWheelCard } from "./SeriesWheelCard";
import { SpotlightSeriesCard } from "./SpotlightSeriesCard";

interface IProps {
  // newsList: any[];
}

export const SeriesWheel = (props: IProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 relative">
        {/* {props.newsList.map((news, index) => ( */}
          <SeriesWheelCard
          // key={index}
          // id={volume.id}
          // friendly_id={volume.friendly_id}
          // cover_url={volume.cover_url}
          // name={volume.name}
          // authors={volume.authors}
          />
        {/* ))} */}
      </div>
    </div>
  );
};

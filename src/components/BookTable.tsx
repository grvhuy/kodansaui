interface IProps {
  status: string;
  rating: string;
  resources: string;
  tags: string[];
}

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex items-center border-[1px] border-black text-sm font-light font-bold";

const BookTable = (props: IProps) => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 border-2 border-black">
      <div className={` ${companyCommonStyles}`}>
        &nbsp;{" "}
        <p className="font-bold text-lg">
          Status{" "}
          <span className="font-medium text-gray-500">
            chungi {props.status}
          </span>
        </p>
      </div>
      <div className={companyCommonStyles}>
        &nbsp;
        <p className="font-bold text-lg">
          Rating{" "}
          <span className="font-medium text-gray-500">
            chungi {props.rating}
          </span>
        </p>{" "}
      </div>
      <div className={` ${companyCommonStyles}`}>
        &nbsp;
        <p className="font-bold text-lg">
          Resources{" "}
          <span className="font-medium text-gray-500">
            chungi {props.resources}
          </span>
        </p>{" "}
      </div>
      <div className={` ${companyCommonStyles} col-span-3`}>
        {" "}
        <div className="font-bold text-lg flex">
          <h3>&nbsp;Tags</h3>
          {props.tags.map((tag) =>(
            <p className="font-medium bg-[#efefef] p-1 text-sm text-gray-500 ml-2">{tag}</p>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default BookTable;

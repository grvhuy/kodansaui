interface IProps {
  rating: string;
  pages: string;
  printRelease: string;
  printFormat: string;
  isbn: string;
  tags: string[];
}

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex items-center border-[1px] border-black text-sm font-light font-bold";

const BookTable = (props: IProps) => {
  return (
    <div className="grid sm:grid-cols-2 w-full mt-10 border-2 border-black">
      <div className={` ${companyCommonStyles}`}>
        &nbsp;{" "}
        <p className="font-bold text-lg">
          Rating{" "}
          <span className="font-medium text-gray-500">{props.rating}</span>
        </p>
      </div>

      <div className={` ${companyCommonStyles}`}>
        &nbsp;
        <p className="font-bold text-lg">
          Pages <span className="font-medium text-gray-500">{props.pages}</span>
        </p>{" "}
      </div>
      <div className={` ${companyCommonStyles} col-span-3`}>
        {" "}
        <div className=" grid grid-cols-4 space-x-8 my-2">
          <div className="font-bold text-lg flex flex-col col-span-1">
            <span> &nbsp;Print Release:</span>
            <span> &nbsp;Print Format:</span>
            <span> &nbsp;ISBN:</span>
          </div>

          <div className="text-lg flex flex-col col-span-3">
            <p>{props.printRelease}</p>
            <p>{props.printFormat}</p>
            <p>{props.isbn}</p>
          </div>
        </div>{" "}
      </div>
      <div className={` ${companyCommonStyles} col-span-3`}>
        {" "}
        <div className="font-bold text-lg flex">
          <h3>&nbsp;Tags</h3>
          {props.tags.map((tag) => (
            <p className="font-medium bg-[#efefef] p-1 text-sm text-gray-500 ml-2">
              {tag}
            </p>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default BookTable;

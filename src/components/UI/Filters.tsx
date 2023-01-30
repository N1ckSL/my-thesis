import * as React from "react";
import { FilterSVG } from "../../static/icons";

function Filters() {
  const [clickedFilter, setClickedFilter] = React.useState("");

  function handleFilterClick(e: any) {
    switch (e.currentTarget.name) {
      case "category":
        setClickedFilter("category");
        break;
      case "title":
        setClickedFilter("title");
        break;
      case "university":
        setClickedFilter("university");
        break;
      case "professor":
        setClickedFilter("professor");
        break;
      default:
        setClickedFilter("");
        break;
    }
  }

  return (
    <div className="bg-filter-bg  w-full rounded-sm py-2 px-4">
      <p className="text-xs pb-1 font-bold">Filter by:</p>
      <div className=" flex justify-between">
        <div className="flex justify-between items-start gap-2 md:gap-4 bg-filter-bg text-white overflow-x-scroll shadow-filter md:shadow-none mr-2 md:overflow-hidden">
          <button
            className={`btn btn-small btn-filter text-xs md:w-24 w-18 ${
              clickedFilter === "category" ? "bg-filter" : ""
            }`}
            name="category"
            onClick={handleFilterClick}
          >
            Category
          </button>
          <button
            className={`btn btn-small btn-filter text-xs md:w-24 w-18 ${
              clickedFilter === "title" ? "bg-filter" : ""
            }`}
            name="title"
            onClick={handleFilterClick}
          >
            Title
          </button>
          <button
            className={`btn btn-small btn-filter text-xs md:w-24 w-18 ${
              clickedFilter === "university" ? "bg-filter" : ""
            }`}
            name="university"
            onClick={handleFilterClick}
          >
            University
          </button>
          <button
            className={`btn btn-small btn-filter text-xs md:w-24 w-18 ${
              clickedFilter === "professor" ? "bg-filter" : ""
            }`}
            name="professor"
            onClick={handleFilterClick}
          >
            Professor
          </button>
        </div>
        <div className="flex gap-2">
          <select className="bg-white px-2 py-1 font-bold text-sm rounded-sm cursor-pointer">
            <option>Popular</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <FilterSVG className="w-8 h-8 p-2 bg-white rounded-sm cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export { Filters };

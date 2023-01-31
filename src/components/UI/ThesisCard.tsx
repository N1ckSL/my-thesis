import * as React from "react";
import { Link } from "react-router-dom";

import { ArrowDown, PlusSVG } from "../../static/icons";
import { getInitials } from "../Utils/Utils";

function ThesisCard({
  title,
  author,
  coordinator,
  category,
  shortDescription,
  fullDescription,
  id,
  randomBackground,
}: {
  title: string;
  author: string;
  randomBackground: string;
  shortDescription: string;
  coordinator?: string;
  category?: string;
  fullDescription?: string;
  id?: number;
}) {
  const [rotateArrow, setRotateArrow] = React.useState(false);

  return (
    <div className="flex items-center md:px-4 mt-8">
      <div className="transition-all rounded-lg border-2 border-black bg-[#DBDBDB] p-4 w-full">
        <div className="md:flex w-full">
          <div className="md:w-1/2 w-full">
            <div className="flex gap-2 justify-start">
              <div
                className={`rounded-md border-2 border-black aspect-square bg-[${randomBackground}] w-20 h-20`}
                style={{ backgroundColor: randomBackground }}
              >
                <div className="flex items-center justify-center h-full text-sm text-black">
                  {category && getInitials(category)}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">{title}</p>
                <p>
                  <span className="font-bold"> Author: </span> {author}
                </p>
                <p>
                  <span className="font-bold"> Category: </span> {category}
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-end items-end md:w-1/2 w-full md:px-4"
            onClick={() => setRotateArrow(!rotateArrow)}
          >
            {/* TODO: add date to top right corned desktop & mobile */}
            {/* <div className="date md:flex justify-end">24.04.2021</div> */}

            <ArrowDown
              className={`w-6 h-6 cursor-pointer transition-all ${
                rotateArrow ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <p className={`w-full pt-4 ${rotateArrow ? "visible" : "hidden"}`}>
          <span className="font-bold"> Short description: </span>
          <br />
          {shortDescription}
        </p>
      </div>
      <Link to={`/thesis/${id}`} className="flex w-1/5 justify-center">
        <PlusSVG className="rounded-md p-4 cursor-pointer shadow-sm bg-white hover:shadow-md" />
      </Link>
    </div>
  );
}

export { ThesisCard };

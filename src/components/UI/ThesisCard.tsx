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
  const user = localStorage.getItem("username");
  const isProfessor = user?.includes("professor");

  function handleAssignClick() {
    if (!coordinator) {
      const updatedThesis = {
        ...ThesisCard,
        coordinator: user,
      };

      fetch(`http://localhost:8000/thesis/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedThesis),
      });
    }
  }

  return (
    <div className="flex items-center md:px-4 mt-8">
      <div className="transition-all rounded-lg border-2 border-black bg-[#DBDBDB] p-4 w-full">
        <div className="md:flex w-full">
          <div className="md:w-1/2 w-full">
            <div className="flex gap-2 justify-start">
              <Link
                to={`/thesis/${id}`}
                className={`rounded-md border-2 border-black aspect-square bg-[${randomBackground}] w-20 h-20`}
                style={{ backgroundColor: randomBackground }}
              >
                <div className="flex items-center justify-center h-full text-sm text-black">
                  {category && getInitials(category)}
                </div>
              </Link>
              <div className="flex flex-col">
                <Link
                  to={`/thesis/${id}`}
                  className="font-bold text-lg mb-1 leading-none tracking-tighter w-fit"
                >
                  {title}
                </Link>
                <p>
                  <span className="font-bold mb-1 leading-none tracking-tighter">
                    Author:{" "}
                  </span>
                  {author}
                </p>
                <p>
                  <span className="font-bold mb-1 leading-none tracking-tighter">
                    Category:{" "}
                  </span>
                  {category}
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
      {isProfessor && (
        <div className="flex w-1/5 justify-center" onClick={handleAssignClick}>
          <PlusSVG
            className={`rounded-md p-4 cursor-pointer shadow-sm bg-white hover:shadow-md ${
              !coordinator?.length ? "hover:bg-green-200" : "hover:bg-red-100"
            }`}
          />
        </div>
      )}
    </div>
  );
}

export { ThesisCard };

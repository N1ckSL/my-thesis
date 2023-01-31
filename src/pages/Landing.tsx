import * as React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Filters } from "../components/UI/Filters";
import { ThesisCard } from "../components/UI/ThesisCard";
import { DotSVG, PlusSVG } from "../static/icons";

interface ThesisProps {
  title: string;
  author: string;
  coordinator: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  id: number;
  randomBackground: string;
}

function Landing() {
  const user = localStorage.getItem("username");
  const isProfessor = user?.includes("professor");
  const [thesisCards, setThesisCards] = React.useState<ThesisProps[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/thesis")
      .then((res) => res.json())
      .then((data) => setThesisCards(data));
  }, []);

  return (
    <>
      <Header />
      <div className="h-full">
        <div className="bg-listing bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <div className="container">
              <div className="flex justify-end md:px-10 md:my-4 mt-10 md:mt-0">
                {user && !isProfessor && (
                  <Link to="/create" className="btn btn-small btn-primary">
                    <PlusSVG className="w-4 h-4 children:fill-white" /> Create
                    Thesis
                  </Link>
                )}
              </div>
              <div className="bg-gray-300/50 container md:mx-auto m-0 mt-2 w-full md:mt-0 bg-white/60 rounded-md md:p-4 p-2">
                <Filters />

                {thesisCards.map((data: ThesisProps) => (
                  <ThesisCard
                    title={data.title}
                    author={data.author}
                    category={data.category}
                    shortDescription={data.shortDescription}
                    id={data.id}
                    key={data.id}
                    randomBackground={getRandomBackground()}
                  />
                ))}

                <div className="flex justify-center mt-8">
                  <button className="btn btn-primary-alt bg-white group rounded-full items-center text-black">
                    <DotSVG className="animate-pulse group-hover:children:fill-white children:fill-secondary-600" />
                    Load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getRandomBackground(): string {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
}

const backgrounds = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#9e9e9e",
  "#607d8b",
];

export { Landing };

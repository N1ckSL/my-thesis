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
}

function Landing() {
  const user = localStorage.getItem("username");
  const [thesisCards, setThesisCards] = React.useState<ThesisProps[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/thesis")
      .then((res) => res.json())
      .then((data) => setThesisCards(data));
  }, []);

  console.log(thesisCards);

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="bg-listing bg-center bg-no-repeat bg-contain h-full">
          <div className="container mx-auto">
            <div className="container">
              <div className="flex justify-end md:px-10 md:my-4 mt-10 md:mt-0">
                {user && (
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

export { Landing };

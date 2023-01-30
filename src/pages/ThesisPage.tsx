import * as React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Loader } from "../components/UI/Loader";

interface Thesis {
  title: string;
  author: string;
  coordinator: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  id: number;
}

function ThesisPage() {
  const { id } = useParams();
  const [thesisData, setThesisData] = React.useState<Thesis | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/thesis/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setThesisData(data);
    };
    fetchData();
  }, [id]);

  if (!thesisData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="bg-thesis bg-center bg-no-repeat bg-contain h-full">
          <div className="container mx-auto py-10 flex items-center">
            <div className="bg-gray-300/90 container md:mx-auto m-0 mt-2 w-full min-h-[20rem] md:mt-0 bg-white/60 rounded-md md:p-4 p-2">
              <div className="rounded-sm p-4">
                <h1 className="text-primary-800 font-bold mb-4">
                  {thesisData?.title}
                </h1>
                <h3 className="text-primary-800 font-bold mb-4">
                  Author:{" "}
                  <span className="font-medium">{thesisData?.author}</span>{" "}
                </h3>
                <h3 className="text-primary-800 font-bold mb-4">
                  Coordinator:{" "}
                  <span className="font-medium">{thesisData?.coordinator}</span>
                </h3>
                <h3 className="text-primary-800 font-bold mb-4">
                  Category:{" "}
                  <span className="font-medium">{thesisData?.category}</span>
                </h3>
              </div>
              <h4 className="text-primary-800 font-bold mb-4">
                Short Description: <br />
                <span className="font-medium">
                  {thesisData?.shortDescription}
                </span>
              </h4>
              <h4 className="text-primary-800 font-bold mb-4">
                Full Description: <br />
                <span className="font-medium">
                  {thesisData?.fullDescription}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ThesisPage };

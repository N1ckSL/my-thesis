import { Header } from "../components/header";
import { ArrowDown, DotSVG, FilterSVG, PlusSVG } from "../static/icons";

function Landing() {
  return (
    <>
      <Header />
      <div className="h-full">
        <div className="bg-listing bg-center bg-no-repeat bg-contain h-full">
          <div className="container mx-auto">
            <div className="container">
              <div className="flex justify-end md:px-10 md:my-4 mt-10 md:mt-0">
                <button className="btn btn-small btn-primary">
                  <PlusSVG className="w-4 h-4 children:fill-white" /> Create
                  Thesis
                </button>
              </div>
              <div className="bg-purple-100/60 container md:mx-auto m-0 mt-2 w-full md:mt-0 bg-white/60 rounded-md md:p-4 p-2">
                <div className="bg-filter-bg  w-full rounded-sm py-2 px-4">
                  <p className="text-xs pb-1 font-bold">Filter by:</p>
                  <div className=" flex justify-between">
                    <div className="flex justify-between items-start gap-2 md:gap-4 bg-filter-bg text-white overflow-x-scroll shadow-filter md:shadow-none mr-2 md:overflow-hidden">
                      <button className="btn btn-small btn-filter text-xs md:w-24 w-18">
                        Category
                      </button>
                      <button className="btn btn-small btn-filter text-xs md:w-24 w-18">
                        Title
                      </button>
                      <button className="btn btn-small btn-filter text-xs md:w-24 w-18">
                        University
                      </button>
                      <button className="btn btn-small btn-filter text-xs md:w-24 w-18">
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
                {/* /filters */}
                <div className="flex items-center md:px-4 mt-8">
                  <div className="md:flex items-center justify-between rounded-lg border-2 border-black bg-[#DBDBDB] p-4 w-full">
                    <div className="flex justify-between gap-2 justify-start md:w-1/2 w-full">
                      <div className="rounded-md border-2 border-black aspect-square bg-[#9cabc260] w-20 h-20">
                        <img src="" alt="" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, exercitationem!
                      </p>
                    </div>
                    <div className="flex justify-end md:w-1/5 w-full md:px-4">
                      <ArrowDown className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex w-1/5 justify-center p-2">
                    <PlusSVG className="rounded-md p-4 cursor-pointer bg-white shadow-md hover:shadow-lg" />
                  </div>
                </div>

                <div className="flex items-center md:px-4 mt-8">
                  <div className="md:flex items-center justify-between rounded-lg border-2 border-black bg-[#DBDBDB] p-4 w-full">
                    <div className="flex justify-between gap-2 justify-start md:w-1/2 w-full">
                      <div className="rounded-md border-2 border-black aspect-square bg-[#9cabc260] w-20 h-20">
                        <img src="" alt="" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, exercitationem!
                      </p>
                    </div>
                    <div className="flex justify-end md:w-1/5 w-full md:px-4">
                      <ArrowDown className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex w-1/5 justify-center">
                    <PlusSVG className="rounded-md p-4 cursor-pointer bg-white hover:shadow-md" />
                  </div>
                </div>

                {/* <div className="flex items-center md:px-4 mt-8">
                  <div className="md:flex items-center justify-between rounded-lg border-2 border-black bg-[#DBDBDB] p-4 w-full">
                    <div className="flex justify-between gap-2 justify-start md:w-1/2 w-full">
                      <div className="rounded-md border-2 border-black aspect-square bg-[#9cabc260] w-20 h-20">
                        <img src="" alt="" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, exercitationem!
                      </p>
                    </div>
                    <div className="flex justify-end md:w-1/5 w-full md:px-4">
                      <ArrowDown className="w-6 h-6 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex w-1/5 justify-center">
                    <PlusSVG className="rounded-md p-4 cursor-pointer bg-white hover:shadow-md" />
                  </div>
                </div> */}
                {/* /listing item */}

                <div className="flex justify-center mt-8">
                  <button className="btn btn-primary-alt rounded-full items-center text-black">
                    <DotSVG className="animate-pulse children:fill-secondary-600" />
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

import { Header } from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="bg-about bg-center flex items-center justify-center bg-no-repeat bg-contain">
          <div className="container mx-auto py-10 flex items-center">
            <div className="container bg-secondary-600/30 md:mx-auto m-0 mt-2 w-full min-h-[20rem] md:mt-0 rounded-md md:p-4 p-2">
              <div className="container">
                <p>
                  The application provides a user-friendly interface that allows
                  easy navigation and management of theses. The login and
                  registration pages are secure and use encrypted authentication
                  methods to protect users' information. Once logged in, users
                  can create a new thesis with all the necessary information,
                  including a title, author, category, short and long
                  descriptions, and select a coordinator if they wish. The
                  coordinators can then review and approve or reject the created
                  theses.
                  <br /> <br />
                  Users can also view the list of all the created theses, sorted
                  by the most recently created, and search for specific theses
                  using the filtering options. Each thesis displays its title,
                  author, category, coordinator, and a short description. By
                  clicking on a thesis, users can see the full details,
                  including the long description.
                  <br /> <br />
                  The app is developed using the latest React framework and
                  TypeScript language, ensuring fast and efficient performance,
                  and a stable and secure codebase. The app's architecture is
                  modular and scalable, making it easy to maintain and add new
                  features in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { About };

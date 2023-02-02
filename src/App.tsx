import "./styles/App.css";

import { Link, Route, Routes } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { Account } from "./pages/Account";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreateThesis } from "./pages/CreateThesis";
import { ThesisPage } from "./pages/ThesisPage";
import { LoaderSVG } from "./static/icons";
import { Header } from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreateThesis />} />
      <Route path="/thesis/:id" element={<ThesisPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function NoMatch() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center justify-center h-full md:mt-20">
        <div className="px-4 py-10 ">
          <h1 className="font-bold text-primary-800 md:py-2 text-xl md:text-[3rem] text-center">
            Seems like you're lost 🤷‍♀️
          </h1>
          <p className="mb-8 mt-2 md:text-lg text-md text-center">
            Would you like to go{" "}
            <Link to="/" className="text-[#6B63FF]">
              home
            </Link>
            ?
          </p>
          <LoaderSVG className="md:w-full w-64 h-64 md:h-auto" />
        </div>
      </div>
    </>
  );
}

export default App;

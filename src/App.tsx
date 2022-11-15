import "./styles/App.css";

import * as React from "react";

import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { MenuLogo, ThesisLogo } from "./static/icons";

import { Account } from "./pages/account";
import { Licence } from "./pages/license";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route path="/account" element={<Account />} />
        <Route path="/licence" element={<Licence />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Landing() {
  const [showMenuLogo, setShowMenuLogo] = React.useState(true);
  function handleMenuClick() {
    setShowMenuLogo(false);
    return (
      <ul className="z-50 bg-gray-400">
        <li>Home</li>
        <li>Account</li>
        <li>Licence</li>
      </ul>
    );
  }

  return (
    <>
      <div className="bg-primary-transparent">
        <div className="menu flex items-center justify-between container max-w-full">
          <Link to="/">
            <ThesisLogo className="w-40 h-40" />
          </Link>
          <div className="nav flex md:items-center md:justify-center justify-end px-4 md:px-0 gap-4 w-full">
            <div className="block relative h-full" onClick={handleMenuClick}>
              <MenuLogo
                className={`md:hidden w-10 h-10 children:fill-secondary-600 cursor-pointer ${
                  showMenuLogo ? "" : "hidden"
                }`}
              />
              <ul
                className={`z-50 bg-gray-400 ${showMenuLogo ? "hidden" : ""}`}
              >
                <li>Home</li>
                <li>Account</li>
                <li>Licence</li>
              </ul>
            </div>
            <ul className="hidden md:flex md:gap-20 md:gap-12 children:py-2 md:children:py-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-secondary-600" : "text-primary-800"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/licence"
                  className={({ isActive }) =>
                    isActive ? "text-secondary-600" : "text-primary-800"
                  }
                >
                  Licence
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    isActive ? "text-secondary-600" : "text-primary-800"
                  }
                >
                  Account
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;

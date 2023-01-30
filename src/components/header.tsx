import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuLogo, ThesisLogo } from "../static/icons";

export const Header = () => {
  const user = localStorage.getItem("username");
  const redirect = useNavigate();

  function handleLogoutClick() {
    localStorage.clear();
    redirect("/");
  }

  return (
    <div className="sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="md:py-2 py-4 flex items-center justify-between container mx-auto">
        <Link to="/" className="items-start h-full">
          <ThesisLogo className="w-fit" />
        </Link>

        <div className="nav flex md:items-center md:justify-center justify-end px-4 md:px-0 gap-4 w-full">
          <div className="relative h-full">
            <div className="desktop hidden md:block">
              <ul
                className={`md:flex md:gap-20 md:gap-12 children:py-2 md:children:py-0`}
              >
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
            <div className="mobile block md:hidden">
              <MenuMobile />
            </div>
          </div>
        </div>
        <div className="hidden md:block flex flex-col justify-between items-center gap-2">
          {user ? (
            <>
              <button
                className="btn btn-primary-alt"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary-alt">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

function MenuMobile() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const [showMenuLogo, setShowMenuLogo] = React.useState(false);

  function handleMenuClick() {
    setShowMenuLogo(true);
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setShowMenuLogo(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [headerRef, setShowMenuLogo]);

  return (
    <div
      className="transition-all relative"
      onClick={handleMenuClick}
      ref={headerRef}
    >
      {showMenuLogo ? (
        <ul
          className={`md:flex md:gap-12 animate-menu-mobile-in gap-2 children:py-1 md:children:py-0`}
        >
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
      ) : (
        <MenuLogo className={`md:hidden block w-10 h-10 cursor-pointer`} />
      )}
    </div>
  );
}

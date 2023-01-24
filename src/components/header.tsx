import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuLogo, ThesisLogo } from "../static/icons";

export const Header = () => {
  return (
    <div className="bg-primary-transparent">
      <div className="md:py-2 py-4 flex items-center justify-between container max-w-full">
        <Link to="/" className="items-start h-full">
          <ThesisLogo className="w-40 h-40" />
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
      </div>
    </div>
  );
};

function MenuMobile() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const [showMenuLogo, setShowMenuLogo] = React.useState(false);

  function handleMenuClick() {
    setShowMenuLogo(true);
    return (
      <ul className="z-50 absolute right-100 bg-gray-400">
        <li>Home</li>
        <li>Account</li>
        <li>Licence</li>
      </ul>
    );
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

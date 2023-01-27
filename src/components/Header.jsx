import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropdown = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else {
      setDropdownActive(true);
    }
  };

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-clrDark shadow-sm">
        <div className="max-w-7xl mx-auto p-5 text-gray-400 flex items-center justify-between">
          <div>
            <img
              src="https://www.presello.com/wp-content/uploads/2019/10/presello-logo-text.png"
              alt="logo"
              className="cursor-pointer h-6"
              onClick={() => navigate("/")}
            />
          </div>
          <nav className="hidden text-sm items-center md:gap-x-6 lg:gap-x-8 md:flex">
            <Link
              to="/"
              className={`uppercase font-semibold py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 ${
                pathMatchRoute("/") && "text-white "
              }`}
            >
              Home
            </Link>
            <div className="relative">
              <div
                className={`uppercase font-semibold py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 cursor-pointer select-none ${
                  pathMatchRoute("/category/sale") ||
                  (pathMatchRoute("/category/rent") && "text-white ")
                }`}
                onClick={handleDropdown}
              >
                Properties
              </div>
              <div
                className={`absolute top-[3.5rem] right-0 w-full ${
                  dropdownActive ? "block" : "hidden"
                }`}
              >
                <ul className="uppercase bg-clrDark text-gray-400 text-center font-semibold">
                  <Link
                    to="/category/sale"
                    className="block hover:text-clrGold transition-all ease-in-out duration-200 py-[10px] px-[5px]"
                    onClick={() => setDropdownActive(false)}
                  >
                    For Sale
                  </Link>
                  <Link
                    to="/category/rent"
                    className="block hover:text-clrGold transition-all ease-in-out duration-200 py-[10px] px-[5px]"
                    onClick={() => setDropdownActive(false)}
                  >
                    For Rent
                  </Link>
                </ul>
              </div>
            </div>
            <Link
              to="/profile"
              className={`uppercase font-semibold py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-white "
              }`}
            >
              {pageState}
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            {/* Open menu button*/}
            <button className="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open Sidebar</span>
              <Bars3Icon className="block h-8 w-8" onClick={handleOpen} />
            </button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} pageState={pageState} />
      <div
        className={`fixed -z-10 bg-black bg-opacity-60 opacity-0 transition-all duration-300 ease-in-out ${
          isOpen && "z-[49] top-0 left-0 bottom-0 w-full h-full opacity-100"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Header;

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
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
        <nav className="hidden items-center gap-x-8 md:flex">
          <Link
            to="/"
            className={`uppercase font-semibold text-sm py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 ${
              pathMatchRoute("/") && "text-white "
            }`}
          >
            Home
          </Link>
          <Link
            to="/properties"
            className={`uppercase font-semibold text-sm py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 ${
              pathMatchRoute("/properties") && "text-white "
            }`}
          >
            Properties
          </Link>
          <Link
            to="/contact"
            className={`uppercase font-semibold text-sm py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 ${
              pathMatchRoute("/contact") && "text-white "
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-x-4  md:flex">
          <Link
            to="sign-in"
            className={`uppercase font-semibold text-sm py-[10px] px-[5px] hover:text-clrGold transition-all ease-in-out duration-200 ${
              pathMatchRoute("/sign-in") && "text-white "
            }`}
          >
            Sign In
          </Link>
          <Link
            to="/create-listing"
            className="uppercase font-semibold text-sm py-2 px-3 border-2 border-clrGold bg-clrGold text-clrDark hover:bg-clrDark hover:text-clrGold transition-all ease-in-out"
          >
            Sell My Property
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          {/* Mobile menu button*/}
          <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            {!isOpen && (
              <Bars3Icon
                className="block h-8 w-8"
                onClick={() => setIsOpen(true)}
              />
            )}
            {isOpen && (
              <XMarkIcon
                className="block h-8 w-8"
                onClick={() => setIsOpen(false)}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

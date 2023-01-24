import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed w-64 top-0 right-0 bottom-0 bg-clrDark h-full text-white z-50">
      <nav className="">
        <div className="flex flex-col justify-center text-center">
          <Link to="/" className="py-8">
            Home
          </Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="divide-y-2">
          <Link to="/sign-in">Sign In</Link>
        </div>
        <div>
          <button>Sell My Property</button>
          <div>
            <Link to="#">
              <AiFillYoutube />
            </Link>
            <Link to="#">
              <AiFillFacebook />
            </Link>
            <Link to="#">
              <AiFillInstagram />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

import { FaBars, FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { useContext } from "react";
import "./Header.css";

import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-scroll";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(AuthContext);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  const header = (

    <>
               <li>
                <Link activeClass="active" to="NavSection" spy={true} smooth={true} className="text-lg text-black hover:text-gray-200">
                Home
                </Link>
              </li>
         

            <li>
             <Link to="aboutSection" spy={true} smooth={true} className="text-lg text-black hover:text-gray-200">
             
             About
             </Link>
            </li>

            <li>
              <Link to="banner" spy={true} smooth={true} className="text-lg text-black hover:text-gray-200">
                Banner
              </Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true} className="text-lg text-black hover:text-gray-200">
                Project
              </Link>
            </li>

            <li>
              <Link to="contact" spy={true} smooth={true} className="text-lg text-black hover:text-gray-200">
                Contact
              </Link>
            </li>
    </>

  );

  return (
    <div
    id="NavSection"
      className={`${
        darkTheme
          ? "dark-theme"
          : location.pathname === "/"
          ? "white-theme"
          : "dark-theme"
      }`}
    >
      <div
        className="navbar py-8 bg-gradient-to-r from-gray-200 to-white text-black rounded fixed z-10 shadow-md mb-5"
        id="navbarSection"
      >
        <div className="nav-title text-3xl font-bold cursor-pointer  me-auto hover:text-gray-200">
          <a href="/">
            Bimol
          </a>
        </div>
        <div className="nav-links mx-auto hidden md:block">
          <ul className="flex gap-5">
         
             {header}
          </ul>
        </div>
        {location.pathname === "/" && (
          <Link
            onClick={toggleTheme}
            className=" font-bold text-base text-black mr-6"
          >
            {darkTheme ? (
              <FaRegLightbulb size={30} />
            ) : (
              <FaLightbulb size={30} />
            )}
          </Link>
        )}

        <div className="dropdown dropdown-end block md:hidden cursor-pointer text-2xl font-bold text-black">
          <label tabIndex={0} className="btn">
            <FaBars />
          </label>

          <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96">
            <ul>
            {header}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

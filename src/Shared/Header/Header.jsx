import { FaBars, FaLightbulb, FaMoon, FaRegLightbulb, FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import "./Header.css";

import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-scroll";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            className=" font-bold text-base text-black mr-6 cursor-pointer"
          >
            {darkTheme ? (
              <FaSun size={30} />
            ) : (
              <FaMoon size={30} />
            )}
          </Link>
        )}

<div className="dropdown dropdown-end cursor-pointer text-2xl font-bold text-black">
          <label tabIndex={0}>
          <div className="relative">
      <button
        className="flex items-center px-4 py-2 space-x-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 focus:bg-gray-300 focus:outline-none md:hidden"
        onClick={toggleMenu}
      >
        <span><FaBars/></span>

      </button>
      {isOpen && (
        <ul className="absolute rounded-lg cursor-pointer right-0 px-5 z-10 mt-2 space-y-2 bg-gradient-to-b from-white via-gray-100 to-gray-200 border border-gray-200 shadow-md w-52 sm:w-auto">
          {header}
        </ul>
      )}
    </div>
      
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;

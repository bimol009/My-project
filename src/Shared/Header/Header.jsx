import { FaBars, FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { useContext } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(AuthContext);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  return (
    <div
      className={`${
        darkTheme
          ? "dark-theme"
          : location.pathname === "/"
          ? "white-theme"
          : "dark-theme"
      }`}
    >
      <div className="navbar py-8 bg-gradient-to-r from-gray-200 to-white text-black z-10 fixed rounded shadow-md mb-5">
        <div className="nav-title text-3xl font-bold  me-auto hover:text-gray-200">
          <Link to="/">Bimol</Link>
        </div>
        <div className="nav-links mx-auto hidden md:block">
          <ul className="flex gap-5">
            <Link to="/">
              <li>
                <a href="#" className="text-lg text-black hover:text-gray-200">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a href="#" className="text-lg text-black hover:text-gray-200">
                  About
                </a>
              </li>
            </Link>

            <li>
              <a href="#" className="text-lg text-black hover:text-gray-200">
                Services
              </a>
            </li>
            <Link to="/contactMe">
              <li>
                <a href="#" className="text-lg text-black hover:text-gray-200">
                  Contact
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a href="#" className="text-lg text-black hover:text-gray-200">
                  Login
                </a>
              </li>
            </Link>
            <Link to="/register">
              <li>
                <a href="#" className="text-lg text-black hover:text-gray-200">
                  Registration
                </a>
              </li>
            </Link>
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

          <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <ul>
              <Link to="/">
                <li>
                  <a
                    href="#"
                    className="text-lg text-black hover:text-gray-200"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a
                    href="#"
                    className="text-lg text-black hover:text-gray-200"
                  >
                    About
                  </a>
                </li>
              </Link>
              <li>
                <a href="#" className="text-lg text-black hover:text-gray-200">
                  Services
                </a>
              </li>
              <Link to="/contactMe">
                <li>
                  <a
                    href="#"
                    className="text-lg text-black hover:text-gray-200"
                  >
                    Contact
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

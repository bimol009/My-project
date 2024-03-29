import React from "react";
import { Link } from "react-scroll";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import  ScrollAnimation  from 'react-animate-on-scroll';

const Footer = () => {
  return (
    <ScrollAnimation animateIn="animate__pulse">
      
     <footer className="bg-gradient-to-b from-gray-800 black">
      <div className="py-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <>
      <li className="list-none">
        <Link
        
          activeClass="active"
          to="NavSection"
          spy={true}
          smooth={true}
          className="text-lg text-white font-semibold hover:text-gray-200 cursor-pointer"
        >
          Home
        </Link>
      </li>

      <li className="list-none">
        <Link
          to="aboutSection"
          spy={true}
          smooth={true}
          className="text-lg text-white font-semibold hover:text-gray-200 cursor-pointer"
        >
          About
        </Link>
      </li>

      <li className="list-none">
        <Link
          to="banner"
          spy={true}
          smooth={true}
          className="text-lg text-white font-semibold hover:text-gray-200 cursor-pointer"
        >
          Banner
        </Link>
      </li>
      <li className="list-none">
        <Link
          to="project"
          spy={true}
          smooth={true}
          className="text-lg text-white font-semibold hover:text-gray-200 cursor-pointer"
        >
          Project
        </Link>
      </li>

      <li className="list-none">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          className="text-lg text-white font-semibold hover:text-gray-200 cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
        </div>
      </div>
      <div className=" py-4 bg-gradient-to-b from-gray-700 to-gray-800">
      <div className="px-8 py-1 text-center">
          <p className="text-blue-500 text-2xl">
            <a href="sarkerbimol@gmail.com">sarkerbimol@gmail.com</a>
          </p>
        </div>
        <div className="px-8 flex justify-center py-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 "
          >
            <FaFacebookSquare size={40} className="text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
          >
            <FaLinkedin size={40} className="text-blue-800" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
          >
            <FaGithubSquare size={40} className="text-gray-400" />
          </a>
        </div>
        <div className="px-8 py-1 text-center">
          <p className="text-white text-2xl">
            &copy; 2023 - All rights reserved by Bimol
          </p>
        </div>
      </div>
    </footer>
    </ScrollAnimation>
  );
};

export default Footer;

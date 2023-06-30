import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import  ScrollAnimation  from 'react-animate-on-scroll';

const Footer = () => {
  return (
    <ScrollAnimation animateIn="animate__pulse">
      
     <footer className="bg-gradient-to-b from-gray-800 black">
      <div className="py-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Link to="/" className="text-white text-lg hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="text-white text-lg hover:text-gray-200">
            Contact
          </Link>
          <Link to="/login" className="text-white text-lg hover:text-gray-200">
            Login
          </Link>
          <Link to="/register" className="text-white text-lg hover:text-gray-200">
            Registration
          </Link>
        </div>
      </div>
      <div className=" py-4 bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="px-8 flex justify-center">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 mr-4 "
          >
            <FaFacebookSquare size={40} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 mr-4"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 mr-4"
          >
            <FaGithubSquare size={40} />
          </a>
        </div>
        <div className="px-8 py-2 text-center">
          <p className="text-white">
            &copy; 2023 - All rights reserved by Bimol
          </p>
        </div>
      </div>
    </footer>
    </ScrollAnimation>
  );
};

export default Footer;

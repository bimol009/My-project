import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTile/SectionTitle";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import  ScrollAnimation  from 'react-animate-on-scroll';

const Footer = () => {
  return (
    <div>
        
      <div className="py-5">
      <SectionTitle subHeading={"My Footer"}></SectionTitle>
      </div>
      <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
      <footer className="footer footer-center p-16 bg-gradient-to-r from-gray-800 to-black text-white rounded">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <Link to="/">
            <a href="#" className="text-lg text-white hover:text-gray-200">
              Home
            </a>
          </Link>
          <Link to="/about">
            <a href="#" className="text-lg text-white hover:text-gray-200">
              About
            </a>
          </Link>
          <a href="#" className="text-lg text-white hover:text-gray-200">
            Services
          </a>
          <Link to="/contactMe">
            <a href="#" className="text-lg text-white hover:text-gray-200">
              Contact
            </a>
          </Link>
          <Link to="/login">
            <a href="#" className="text-lg text-white hover:text-gray-200">
              Login
            </a>
          </Link>
          <Link to="/register">
            <a href="#" className="text-lg text-white hover:text-gray-200">
              Registration
            </a>
          </Link>
        </div>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.facebook.com/bimol.sarker.56/">
            <FaFacebookSquare size={40} className="text-blue-500" />
          </Link>
          <Link to="https://www.linkedin.com/in/bimol-sarker-34a547211/">
            <FaLinkedin size={40} className="text-blue-800" />
          </Link>
          <Link to="https://github.com/bimol009">
          <FaGithubSquare size={40} className="text-gray-400" />
          </Link>
        </div>
        <div>
          <p className="text-white font-semibold">
            &copy; 2023 - All rights reserved by Bimol Sarker
          </p>
        </div>
      </footer>
      </ScrollAnimation>
    </div>
  );
};

export default Footer;

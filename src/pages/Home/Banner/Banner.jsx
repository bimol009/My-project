import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import CV from './resume.pdf'
import Typewriter from "typewriter-effect";
import { useState } from "react";


import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll/modules";
import { AuthContext } from "../../../Provider/AuthProvider";

const Banner = () => {
 



  const [state] = useState({
    title: "I am a Mern Stack Developer",
  });

  return (
    <div id="banner">
      <div className="banner-section pt-28 py-5 rounded">
        <div className="banner-content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center items-center">
          <div className="content-part text-center">
            <h1 className="static-part text-4xl font-bold  mb-2">
              {state.title}
            </h1>
            
            <div className={`py-4 text-4xl font-bold `}>
              <Typewriter
                options={{
                  strings: [
                    "BIMOL SARKER",
                    "A web developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="hire flex justify-center items-center mt-5">
            <Link to="contact" spy={true} smooth={true} className="text-lg text-black hover:text-gray-200">
              
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                  <a href="">HIRE ME</a>
                </button>
              </Link>
            
                <h2 className="text-2xl font-bold">
                  <a href={CV}download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">My Resume</a>
                </h2>
            
            </div>
          </div>

          <div className="img-part flex justify-center">
            <img
              src="https://i.ibb.co/r3fm9kB/19362653-removebg-preview.png"
              alt=""
            />
          </div>
          <ScrollAnimation animateIn="animate__pulse">
          <div className="grid grid-flow-col gap-4 text-center justify-center">
            <a
              href="https://www.facebook.com/bimol.sarker.56/"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              <FaFacebookSquare size={40} className="text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/bimol-sarker-34a547211/"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              <FaLinkedin size={40} className="text-blue-800" />
            </a>
            <a
              href="https://github.com/bimol009"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              <FaGithubSquare size={40} className="text-gray-400" />
            </a>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Banner;

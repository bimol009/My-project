import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import CV from './resume.pdf'
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../../Particles/particlesBackground";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Banner = () => {
  const [state] = useState({
    title: "I am,",
  });

  return (
    <div id="banner">
      <ParticlesBackground></ParticlesBackground>
      <div className="banner-section px-12 pt-28 py-5 rounded ">
        <div className="banner-content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center items-center">
          <div className="content-part text-center">
            <h1 className="static-part text-6xl font-bold  mb-2">
              {state.title}
            </h1>
            
            <div className=" dynamic-part text-6xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 text-transparent bg-clip-text py-4">
              <Typewriter
                options={{
                  strings: [
                    "BIMOL SARKER.",
                    "A Web Developer.",
                    "A MERN Stack Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="hire flex justify-center items-center mt-5">
              <Link to="/contactMe">
              
                <button className="btn btn-active btn-neutral mr-2">
                  <a href="">HIRE ME</a>
                </button>
              </Link>
            
                <h2 className="text-3xl font-bold">
                  <a href={CV}download className="btn btn-active btn-neutral">My Resume</a>
                </h2>
            
            </div>
          </div>

          <div className="img-part flex justify-center">
            <img
              src="https://i.ibb.co/r3fm9kB/19362653-removebg-preview.png"
              alt=""
            />
          </div>
          <ScrollAnimation animateIn="animate__rollIn">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/bimol.sarker.56/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={40} className="text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/bimol-sarker-34a547211/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} className="text-blue-800" />
            </a>
            <a
              href="https://github.com/bimol009"
              target="_blank"
              rel="noreferrer"
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

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../../Particles/particlesBackground";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


const Banner = () => {
  const [state] = useState({
    title: "I am,",
  });


  return (
  <div>
    <ParticlesBackground></ParticlesBackground>
      <div className="banner-section pt-28 py-5 rounded ">
    <div className="banner-content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center items-center">
     
      <div className="content-part text-center">
        <h1
          className="static-part text-5xl font-bold  mb-2"
        
        >
          {state.title}
        </h1>

        <div
          className="dynamic-part text-3xl font-bold text-red-500"
         
         
        >
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
            {" "}
            <button className="btn btn-active btn-neutral mr-2">
              <a href="">HIRE ME</a>
            </button>
          </Link>
          <Link to="https://drive.google.com/uc?export=download&id=1vd_CGM-BkeI9VLwPj5a3eH9jbfgouO2s">
            <h2 className="text-3xl font-bold">
              <a className="btn btn-active btn-neutral">My Resume</a>
            </h2>
          </Link>
        </div>
      </div>
    
      

  
      <div
      
        className="img-part flex justify-center"
      
      >
        <img
          src="https://i.ibb.co/r3fm9kB/19362653-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="ml-5 py-5 grid grid-flow-col gap-4">
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
 
    </div>
  </div>
  
  </div>
  );
};

export default Banner;

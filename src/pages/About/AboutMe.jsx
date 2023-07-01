import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../components/SectionTile/SectionTitle";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import './About.css'
import { AuthContext } from "../../Provider/AuthProvider";

const AboutMe = () => {
  const { darkTheme } = useContext(AuthContext);

  const themeClass = darkTheme ? 'dark-theme' : 'white-theme';

  return (
    <div>
      <SectionTitle subHeading={"About Me"}></SectionTitle>
      <div className="grid grid-cols-1 items-center mb-5" id="aboutSection">
      
   

      <ScrollAnimation animateIn="animate__pulse">

        <div className="img-sec flex justify-center">
          <img
          className={`${themeClass}`}
            src="https://i.ibb.co/YLh76RD/248672140-237903104922971-3040476626125467773-n-removebg-preview-1.png"
            alt=""
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "500px",
            }}
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <p
          className={`text-xl py-5 px-5 mt-8 text-black ptag ${themeClass}`}
         
        >
          I'm Bimol Sarkar, and I live in Sakhipur Taktarchala, Tangail. I
          studied Computer Science and Engineering (CSE) in my final semester at
          the National University of Tangail. Right now, I'm getting ready for
          my final exams coming up in July. <br /> In the last two years, I have
          worked hard to get better at different things. I have given a lot of
          importance to managing my time well, and it has really helped me
          improve my skills. Specifically, I have focused on getting better at
          React, MongoDB, and JavaScript....
          <Link to="/about">
            <span className="btn btn-link text-xl">See More</span>
          </Link>
        </p>
      </ScrollAnimation>
    </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import SectionTitle from "./../../components/SectionTile/SectionTitle";
import "./Skill.css";
import ScrollAnimation from "react-animate-on-scroll";

const Skill = () => {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle subHeading="My Skill" />
      </div>
      <ScrollAnimation animateIn="animate__rubberBand">
        <div className="skill-slide">
          <span style={{ "--i": 1 }}>
            <img
              src="https://i.ibb.co/q59PggP/2400-1260-rw-blog-node-js.png"
              alt=""
            />
          </span>
          <span style={{ "--i": 2 }}>
            <img src="https://i.ibb.co/c2MxRL1/19199360.jpg" alt="" />
          </span>
          <span style={{ "--i": 3 }}>
            <img src="https://i.ibb.co/LZjt2RP/javascript-logo.png" alt="" />
          </span>
          <span style={{ "--i": 4 }}>
            <img src="https://i.ibb.co/WKwx633/download-2.png" alt="" />
          </span>
          <span style={{ "--i": 5 }}>
            <img src="https://i.ibb.co/gTWTh9H/HTML-CSS-Review.png" alt="" />
          </span>
          <span style={{ "--i": 6 }}>
            <img
              src="https://i.ibb.co/rpLYszg/image-blog-openlogic-what-is-mongodb.png"
              alt=""
            />
          </span>
          <span style={{ "--i": 7 }}>
            <img src="https://i.ibb.co/pZM4FbV/tail.png" alt="" />
          </span>
          <span style={{ "--i": 8 }}>
            <img src="https://i.ibb.co/DKGZR39/Json-web-token.jpg" alt="" />
          </span>
        </div>
      </ScrollAnimation>

      <div className="technology">
        <div className="my-skill px-4">
          <h2>
            <span className="font-bold text-3xl">frontent :</span>
          </h2>

          {/* Frontend */}
          <ScrollAnimation animateIn="animate__lightSpeedInRight">
            <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 py-5 mt-4">
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    Html
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    CSS
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    Javascrpt
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    ReactJs
                  </span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    TailwindCss
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    BootsTrapCss
                  </span>
                </a>
              </li>
            </ul>
          </ScrollAnimation>

          {/* Backend */}
          <h2>
            <span className="font-bold text-3xl">Backend :</span>
          </h2>
          <ScrollAnimation animateIn="animate__lightSpeedInLeft">
            <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 py-5 mt-4">
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    NodeJs
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    Express
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    Mongodb
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    JWT
                  </span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">
                    Firebase
                  </span>
                </a>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Skill;

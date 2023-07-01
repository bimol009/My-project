import React from "react";
import SectionTitle from "./../../components/SectionTile/SectionTitle";
import "./Skill.css";
import ScrollAnimation from "react-animate-on-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";

import { Link } from "react-scroll/modules";

const Skill = () => {
  return (
    <div>
      <div>
        <SectionTitle subHeading="My Skill" />
      </div>
      <ScrollAnimation animateIn="animate__pulse">
        <div className="container">
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/q59PggP/2400-1260-rw-blog-node-js.png"
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/c2MxRL1/19199360.jpg"
                alt="slide_image"
            
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/LZjt2RP/javascript-logo.png"
                alt="slide_image"
             
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/WKwx633/download-2.png"
                alt="slide_image"
             
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/rpLYszg/image-blog-openlogic-what-is-mongodb.png"
                alt="slide_image"
               
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/pZM4FbV/tail.png"
                alt="slide_image"
              
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/DKGZR39/Json-web-token.jpg"
                alt="slide_image"
              
              />
            </SwiperSlide>

           
          </Swiper>
        </div>
      </ScrollAnimation>

      <div className="technology">
        <div className="my-skill px-10">
          <h2>
            <span className="font-bold text-3xl">Frontend:</span>
          </h2>

          {/* Frontend */}
          <ScrollAnimation animateIn="animate__pulse">
            <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 py-5 mt-4">
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    HTML
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    CSS
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    JavaScript
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    React.js
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    Tailwind
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    Bootstrap
                  </span>
                </a>
              </li>
            </ul>
          </ScrollAnimation>

          {/* Backend */}
          <h2>
            <span className="font-bold text-3xl">Backend:</span>
            
          </h2>
          <ScrollAnimation animateIn="animate__pulse">
            <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 py-5 mt-4">
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    Node.js
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    Express
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    MongoDB
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    JWT
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
                    Firebase
                  </span>
                </a>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          className="text-lg flex justify-center py-10"
        >
          <a href="">
            <span className="rounded-full px-5 py-2.5 text-3xl mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white">
              Hire Me
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Skill;

import React from "react";
import SectionTitle from "./../../components/SectionTile/SectionTitle";
import "./Skill.css";
import ScrollAnimation from "react-animate-on-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
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
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
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
                className="rounded-t-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/LZjt2RP/javascript-logo.png"
                alt="slide_image"
                className="rounded-t-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/WKwx633/download-2.png"
                alt="slide_image"
                className="rounded-t-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/rpLYszg/image-blog-openlogic-what-is-mongodb.png"
                alt="slide_image"
                className="rounded-t-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/pZM4FbV/tail.png"
                alt="slide_image"
                className="rounded-t-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/DKGZR39/Json-web-token.jpg"
                alt="slide_image"
                className="rounded-t-lg"
              />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
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
          className="text-lg text-black  flex justify-center py-10"
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

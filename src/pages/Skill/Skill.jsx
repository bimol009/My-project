import React from "react";
import SectionTitle from "./../../components/SectionTile/SectionTitle";
import "./Skill.css";
import ScrollAnimation from "react-animate-on-scroll";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Skill = () => {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle subHeading="My Skill" />
      </div>
      <ScrollAnimation animateIn="animate__rubberBand">
        <div className="container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/q59PggP/2400-1260-rw-blog-node-js.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/c2MxRL1/19199360.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LZjt2RP/javascript-logo.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/WKwx633/download-2.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/rpLYszg/image-blog-openlogic-what-is-mongodb.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/pZM4FbV/tail.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/DKGZR39/Json-web-token.jpg" alt="slide_image" />
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
      {/* <ScrollAnimation animateIn="animate__rubberBand">
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
      </ScrollAnimation> */}

      <div className="technology">
        <div className="my-skill px-10">
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








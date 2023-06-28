import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from '../../components/SectionTile/SectionTitle';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe = () => {

  return (
    <div className="grid grid-cols-1 items-center mb-5">
      <SectionTitle subHeading={"About Me"}></SectionTitle>

      <ScrollAnimation animateIn='animate__headShake'>
        <div className="img-part flex justify-center">
          <img
            src="https://i.ibb.co/YLh76RD/248672140-237903104922971-3040476626125467773-n-removebg-preview-1.png"
            alt=""
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "500px"
            }}
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeIn'>
        <p
          className="text-3xl px-4 md:px-20 text-center mt-8 text-black"
          style={{
            height: "300px",
            width: "100%",
            overflow: "auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            margin: "0 auto",
            background: "linear-gradient(to right, #f2f2f2, #e6e6e6)",
          }}
        >
          I'm Bimol Sarkar, and I live in Sakhipur Taktarchala, Tangail. I studied
          Computer Science and Engineering (CSE) in my final semester at the
          National University of Tangail. Right now, I'm getting ready for my
          final exams coming up in July. <br /> In the last two years, I have worked hard
          to get better at different things. I have given a lot of importance to
          managing my time well, and it has really helped me improve my skills.
          Specifically, I have focused on getting better at React, MongoDB, and
          JavaScript....<Link to='/about'><span className='btn btn-link'>See More</span></Link> 
        </p>
      </ScrollAnimation>

    </div>
  );
};

export default AboutMe;

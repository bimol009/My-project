import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTile/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "react-animate-on-scroll";
import './About.css'
import { Helmet } from "react-helmet-async";

const About = () => {
  const navHandler = () => {
    window.history.back();
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 items-center bg-black mb-5 pt-20 ">
      <SectionTitle subHeading={"About Me"}></SectionTitle>
      <Helmet>
          <title>MY PORTFOLIO | ABOUT ME</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
  
        <div className="img-sec flex justify-center pb-10">
          <img
              src="https://i.ibb.co/YLh76RD/248672140-237903104922971-3040476626125467773-n-removebg-preview-1.png"
              alt=""
            
          />
        </div>
  
      {/* <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'
  scrollableParentSelector='#scrolly-div'>
  <h1>
    scrollableParentSelector
  </h1>
</ScrollAnimation> */}

   
      <p
     className="text-3xl text-black px-20 text-center ptag mt-8 py-10"
     style={{
        height: "400px",
        width: "90%", 
        overflow: "auto",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "0 auto", 
        backgroundColor: "#f2f2f2", 
      }}
  >
          I'm Bimol Sarkar, and I live in Sakhipur Taktarchala, Tangail. I
          studied Computer Science and Engineering (CSE) in my final semester at
          the National University of Tangail. Right now, I'm getting ready for
          my final exams coming up in July. <br /> In the last two years, I have
          worked hard to get better at different things. I have given a lot of
          importance to managing my time well, and it has really helped me
          improve my skills. Specifically, I have focused on getting better at
          React, MongoDB, and JavaScript. <br /> I am a straight forward person.
          I speak my mind directly and honestly. I always strive to be truthful
          and avoid telling lies. I have a strong aversion to compromising with
          injustice. Additionally, cricket holds a special place in my heart. It
          is a particular weakness of mine. <br />
          In addition to improving my skills, I have actively engaged in various
          projects to put my knowledge into practice. In my latest project, I
          used technologies like React, Node.js, MongoDB, Express JWT, and
          Firebase Stripe. I thoroughly enjoyed working on this project. It took
          me almost 20 days to complete. Throughout this experience, I had the
          chance to learn new techniques, and increase my skills and know new
          features such as theme change buttons and animations, and enhance my
          skill set. <br /> In addition to my love for coding, I have a deep
          passion for playing cricket. It's my favorite hobby, and I also enjoy
          watching international matches, especially when they have English
          commentary. This helps me better comprehend the game and attempt to
          express my thoughts about it, although I may have some limitations in
          doing so. <br /> Lastly, I have a strong desire to build a career as a
          developer because I genuinely love this field. Because it’s my
          passion. Every day, I have the opportunity to learn something new,
          which I greatly enjoy. Additionally, coding holds a special place in
          my heart, and I relish spending time in front of my laptop. I also
          love this because it allows me to work remotely, providing the
          flexibility to perform office tasks from the comfort of my own
          home—this benefit not typically found in other professions. So I love
          this profession.
        </p>
 

      <div className="text-center">
        <button
          onClick={navHandler}
          className="btn btn-outline btn-warning mt-5 mb-5 btn-circle font-bold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default About;

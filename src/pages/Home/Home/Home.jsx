import Banner from "../Banner/Banner";
import AboutMe from "../../About/AboutMe";
import Contact from "../../Contact/Contact";
import MyProjects from "../../MyProjects/MyProjects";
import Skill from "../../Skill/Skill";
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  return (
    <div className="px-1">
        <Helmet>
          <title>MY PORTFOLIO</title>
        </Helmet>
      <div>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Skill></Skill>
        <MyProjects></MyProjects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;

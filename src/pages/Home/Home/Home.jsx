import Banner from "../Banner/Banner";
import AboutMe from "../../About/AboutMe";
import Contact from "../../Contact/Contact";
import MyProjects from "../../MyProjects/MyProjects";

const Home = () => {
  
  return (
    <div>
      <div className="container mx-auto">
        <Banner></Banner>
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;

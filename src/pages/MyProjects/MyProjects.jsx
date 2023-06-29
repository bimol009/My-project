import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTile/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import "./MyProject.css";

const MyProjects = () => {
  return (
    <div className="px-8 rounded-lg" id="project">
      <div className="py-10">
        <SectionTitle subHeading={"My Projects Section"}></SectionTitle>
      </div>
      {/* First Project */}
      <div className="py-5">
        <SectionTitle subHeading={"My First Projects"}></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <ScrollAnimation animateIn="animate__backInLeft">
          <div className="box-cover box rounded-lg"></div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__backInRight">
          <div className="card lg:card-side  shadow-xl">
            <div className="card-body">
              <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                  My Projects Summary
                </h1>
                <h1 className="text-2xl font-bold">
                  SCAMP (Summer Camp Project Site){" "}
                  <Link to="https://summer-project-737c4.web.app/">
                    <span className="text-blue-500">Visit</span>
                  </Link>
                  ||
                  <Link to="https://github.com/bimol009/summer">
                    <span className="text-blue-500">Client</span>
                  </Link>
                  ||
                  <Link to="https://github.com/bimol009/summer-server">
                    <span className="text-blue-500">Server</span>
                  </Link>
                </h1>
                <div className=" text-2xl">
                  <p>
                    1. Academy of dance login website having features like
                    Payment System, using sort, available seat define, Add to
                    Cart, and Adding Admin, Instructor, and User routes.
                  </p>
                  <p className="py-2">
                    2. Payment system is built using the Stripe payment gateway.
                  </p>
                  <p>
                    3. For authorization and authentication, JWT and Firebase
                    are used. The website is also mobile responsive.
                  </p>
                </div>
                <h3 className="text-5xl">
                  <span className="font-bold">TECHNOLOGY</span>:
                  </h3>
                 <div className="technoloy">
                 <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 mt-4">
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">React</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Node.js</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">MongoBD</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">CSS</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">APIs</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Axios</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Express</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">JWT</span></a>
                  </li>
                  <li>
                  
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Firebase</span>
                  </li>
                  <li>
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Stripe</span>
                  </li>
                  </ul>
                 </div>
                
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Second Project */}
      <div className="py-5">
        <SectionTitle subHeading={"My Second Projects"}></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ScrollAnimation animateIn="animate__backInDown">
          <div className="box-cover box1 rounded-lg"></div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__backInUp">
          <div className="card lg:card-side  shadow-xl">
            <div className="card-body">
              <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                  My Projects Summary
                </h1>
                <h1 className="text-2xl font-bold">
                  TOY PRODUCT (A website to buy toy){" "}
                  <Link to="https://toy-web-client.web.app/">
                    <span className="text-blue-500">Visit</span>
                  </Link>
                  ||
                  <Link to="https://github.com/bimol009/Toy-client-side">
                    <span className="text-blue-500">Client</span>
                  </Link>
                  ||
                  <Link to="https://github.com/bimol009/Toy-server-side">
                    <span className="text-blue-500">Server</span>
                  </Link>
                </h1>
                <div className="py-6 text-2xl">
                  <p>
                    1. It’s a website where users can buy any type of beautiful
                    toy.
                  </p>
                  <p className="py-2">
                    2. Used MongoDB Database to store user details.
                  </p>
                  <p>
                    3. Login and Registration system with server site and client
                    site using.
                  </p>
                </div>
                <h3 className="text-4xl">
                  <span className="font-bold">TECHNOLOGY</span>:
             
                </h3>
                <div className="technoloy">
                 <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 mt-4">
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">React</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Node.js</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">MongoBD</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">CSS</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">APIs</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Axios</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Express</span></a>
                  </li>
                  </ul>
                 </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Third Project */}
      <div className="py-5">
        <SectionTitle subHeading={"My Third Projects"}></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ScrollAnimation animateIn="animate__backInLeft">
          <div className="box-cover box2 rounded-lg"></div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__backInRight">
          <div className="card lg:card-side  shadow-xl">
            <div className="card-body">
              <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                  My Projects Summary
                </h1>
                <h1 className="text-2xl font-bold">
                  FOOD RECIPE WEB (A website for food recipes){" "}
                  <Link to="https://food-recipe-assign.web.app/">
                    <span className="text-blue-500">Visit</span>
                  </Link>
                  ||
                  <Link to="https://github.com/bimol009/food-recipy-client">
                    <span className="text-blue-500">Client</span>
                  </Link>
                  ||
                  <Link to="https://github.com/bimol009/food-recipe-server">
                    <span className="text-blue-500">Server</span>
                  </Link>
                </h1>
                <div className="py-8 text-2xl">
                  <p>1. It’s a frontend and backend usable website.</p>
                  <p className="py-2">
                    2. Used JSON data to store user details and implemented
                    login and registration functionality.
                  </p>
                </div>
                <h3 className="text-4xl">
                  <span className="font-bold">TECHNOLOGY</span>: 
                </h3>
                <div className="technoloy">
                 <ul className="grid grid-cols-2 md:grid-cols-5 text-xl gap-4 mt-4">
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">React</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Node.js</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">MongoBD</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">CSS</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">RestAPIs</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Tailwind</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">Express</span></a>
                  </li>
                  <li>
                    <a href=""><span className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-4 py-2 mt-5 text-white font-bold items-center text-center">daisyUI</span></a>
                  </li>
                
                  </ul>
                 </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default MyProjects;

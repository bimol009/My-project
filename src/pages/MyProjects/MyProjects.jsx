import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTile/SectionTitle";
import  ScrollAnimation  from 'react-animate-on-scroll';

const MyProjects = () => {
  return (
    <div className="px-8 rounded-lg">
        <div className="py-10">
        <SectionTitle subHeading={"My Projects Section"}></SectionTitle>
        </div>
      {/* First Project */}

      <div className="py-5">
      <SectionTitle subHeading={"My First Projects"}></SectionTitle>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       <ScrollAnimation animateIn='animate__backInLeft'>
       <div className="flex-1 overflow-hidden">
          <div className="h-[500px] overflow-y-auto">
            <img
              src="https://i.ibb.co/c6pnS5x/Screen-Shot-2023-06-29-at-01-36-40.png"
              alt=""
            />
          </div>
        </div>
       </ScrollAnimation>
        <ScrollAnimation animateIn='animate__backInRight'>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center mb-5">
            My Projects Summary
          </h1>
          <h1 className="text-2xl font-bold">
            SCAMP (Summer Camp Project Site) 
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
          <ul className="py-8 text-2xl">
            <li>
              1. Academy of dance login website having features like Payment
              System, using sort, available seat define, <br /> Add to Cart, And
              Adding Admin, Instructor and User routes.
            </li>
            <li className="py-2">
              2.Payment system is built using Stripe payment gateway.
            </li>
            <li>
              3.For authorization and authentication JWT. The Firebase used and
              Mobile Responsive.
            </li>
          </ul>
          <h3 className="text-4xl">
            <span className="font-bold">TECHNOLOGY</span>: React Node.js MongoBD
            CSS REST APIs Axios Express JWT Firebase Stripe
          </h3>
        </div>
        </ScrollAnimation>
      </div>

      {/* Second Project */}
      <div className="py-5">
      <SectionTitle subHeading={"My Second Projects"}></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ScrollAnimation animateIn='animate__backInDown'>
        <div className="flex-1 overflow-hidden">
          <div className="h-[500px] overflow-y-auto">
            <img
              src="https://i.ibb.co/j3HxrdG/Screen-Shot-2023-06-29-at-02-05-50.png"
              alt=""
            />
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__backInUp'>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center mb-5">
            My Projects Summary
          </h1>
          <h1 className="text-2xl font-bold">
          TOY PRODUCT (A website to buy toy) 
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
          <ul className="py-8 text-2xl">
            <li>
              1. It’s a website where users can buy any type of beautiful toy.

            </li>
            <li className="py-2">
              2.Used MongoDB Database to store user details.
            </li>
            <li>
              3. Login and Registration system with server site and client site with use.
            </li>
          </ul>
          <h3 className="text-4xl">
            <span className="font-bold">TECHNOLOGY</span>: React CSS Node.js MongoBD REST APIs Axios Express
          </h3>
        </div>
        </ScrollAnimation>
      </div>

      {/* Third Project */}

      <div className="py-5">
      <SectionTitle subHeading={"My Third Projects"}></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <ScrollAnimation animateIn='animate__backInLeft'>
      <div className="flex-1 overflow-hidden">
          <div className="h-[500px] overflow-y-auto">
            <img
              src="https://i.ibb.co/Z8k8kX8/Screen-Shot-2023-06-29-at-02-17-24.png"
              alt=""
            />
          </div>
        </div>
      </ScrollAnimation>
        <ScrollAnimation animateIn='animate__backInRight'>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center mb-5">
            My Projects Summary
          </h1>
          <h1 className="text-2xl font-bold">
          FOOD RECIPY WEB (A website to Food) 
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
          <ul className="py-8 text-2xl">
            <li>
              1.  It’s a Frontend and backend Usable website.

            </li>
            <li className="py-2">
              2.Used JSON data to store user details. And login registration use.
            </li>
          
          </ul>
          <h3 className="text-4xl">
            <span className="font-bold">TECHNOLOGY</span>:  React CSS Node.js REST APIs Express, Tailwind css, daisyUi
          </h3>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default MyProjects;

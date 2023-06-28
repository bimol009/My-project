import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import SectionTitle from "../../components/SectionTile/SectionTitle";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y2zdjfp",
        "template_9116a9q",
        form.current,
        "jhKkGj9txNQb03tOI"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully send email",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className="py-12">
      <div className="pt-10">
      <SectionTitle subHeading={"Contact Me"}></SectionTitle>
      </div>
      <div className="grid grid-cols-1">
        <div className="img-section-con flex justify-center items-center">
            <img className="h-screen" src="https://i.ibb.co/yPJsdXQ/5124556-removebg-preview.png" alt="" />
        </div>
      <div className="container mx-auto bg-banner-bg bg-no-repeat rounded-lg  w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact</h2>
        <div className="mx-auto">
          <div className="p-8 max-w-xl mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-block bg-slate-800 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-colors duration-300"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactMe;

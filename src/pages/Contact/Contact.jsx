import React, { useRef, useState } from "react";
import SectionTitle from "../../components/SectionTile/SectionTitle";

import Swal from "sweetalert2";
import  emailjs  from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send email",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );

    form.current.reset();
    setIsButtonDisabled(true);
  };

  const handleInputChange = () => {
    const inputs = Array.from(form.current.querySelectorAll("input"));
    const isFormValid = inputs.every((input) => input.value.trim() !== "");

    setIsButtonDisabled(!isFormValid);
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto">
        <SectionTitle subHeading="Get in touch with us" />
        <div className="max-w-xl mx-auto rounded-lg shadow-md py-8 px-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                required
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`${
                isButtonDisabled ? "bg-gray-400 cursor-not-allowed w-full" : "bg-blue-500 hover w-full :bg-blue-600 w-full"
              } text-white py-3 px-6 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-colors duration-300`}
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

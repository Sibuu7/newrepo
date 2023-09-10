import React from "react";
import Lottie from "react-lottie";
import contact from "../assets/robo2.json";

const Contact = () => {

  function Submit(e) {
    const formEle = document.querySelector("form")
    e.preventDefault()
    const formDatab = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbxWcZvf2dtMnrVBR_lk-VNJHcLLIHjejo8OQ-jfNtFMU4Yqd2vIe-1sUkkFtJZFbCymCg/exec", 
      {method: "POST",
      body: formDatab
      }
    )
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-br from-black via-black to-indigo-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 tracking-wider">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex flex-row justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2 gap-4"
            onSubmit={(e) => {Submit(e)}}
          >
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="Message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="Submit" className="text-white bg-gradient-to-r from-cyan-900 to-blue-700 px-6 py-3 my-8 mx-auto rounded-md hover:scale-105 hover:bg-gradient-to-br duration-300 font-bold">
              Let's talk
            </button>
          </form>
          <div className="relative hidden lb:flex mx-auto md:h-full">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

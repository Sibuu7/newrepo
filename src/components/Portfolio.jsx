import React from "react";
import resposive from "../assets/portfolio/resposive.png";
import weather from "../assets/portfolio/weather.png";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import toDo from "../assets/portfolio/toDo.png";
import portfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: resposive,
      style: "shadow-yellow-600",
    },
    {
      id: 2,
      src: weather,
      style: "shadow-yellow-500",
      demo: "https://aman0430.github.io/weather.github.io/",
      code: "https://github.com/Aman0430/weather.github.io.git",
    },
    {
      id: 3,
      src: navbar,
      style: "shadow-indigo-500",
    },
    {
      id: 4,
      src: reactParallax,
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: toDo,
      style: "shadow-sky-500",
      demo: "https://aman0430.github.io/to-do-App.github.io/",
      code: "https://github.com/Aman0430/to-do-App.github.io.git",
    },
    {
      id: 6,
      src: portfolio,
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-tr from-indigo-900 via-black to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="mt-4 tracking-wider">Check out some of my work right here</p>
        </div>

        {/* cards */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center">

          {portfolios.map(({ id, src, style, demo, code }) => (

            <div key={id} className={`shadow-md rounded-lg ${style}`}>
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center font-bold text-xs">
                <a href={demo} className="w-1/2 px-4 py-3 m-4 hover:scale-110 duration-100 uppercase">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-4 py-3 m-4 hover:scale-110 duration-100 uppercase">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
// import HeroImg from "../assets/hero4.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Lottie from "react-lottie";
import robo from "../assets/robo.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robo,
    rendererSettings: {
      prreserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-black via-black to-indigo-900 text-white pt-12"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white tracking-wide">
            Hello, I'am <span className="text-red-800">Aman</span> Singh.
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-lg tracking-wider">
            I'am a web developer, i have worked with techs like tailwind,
            reactjs etc.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-blue-700 cursor-pointer hover:bg-gradient-to-tr font-bold"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden mb:flex">
          <Lottie options={defaultOptions} height={450} width={450} />
        </div>
      </div>
    </div>
  );
};

export default Home;

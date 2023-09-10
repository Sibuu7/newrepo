import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Typed from "react-typed";

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      style: 'border-2 rounded-lg text-black px-8 bg-gray-200 hover:bg-transparent mx-auto',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className='flex justify-between item-center w-full h-20 px-4 py-4 text-white bg-black fixed z-20'>
      <div className='flex gap-2'>
        <div className='rounded-full text-gray-800 bg-gradient-to-t from-[#0F2027] via-[#203A43] to-[#2C5364] bg-blend-luminosity'>
          <h1 className='text-4xl px-3 py-1 text-gray-100 '>A</h1>
        </div>
        <h1 className='text-2xl tracking-wide uppercase ml-2 pt-2 font-signature text-yellow-300'>
          <Typed
            strings={[
              "Aman"
            ]}
            typeSpeed={500}
            backSpeed={150}
            loop
          />
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer uppercase text-gray-600 hover:text-white duration-200 py-3 font-bold ${style}`}>
              <Link to={link} smooth duration={400}>
                {link}
              </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pt-2 z-10 text-gray-500 md:hidden '>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-tl from-black via-black to-violet-900 text-gray-500'>
        {links.map(({ id, link, style }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer py-6 text-4xl hover:text-white duration-200 uppercase font-bold ${style}`}>
                {link}
            </li>
          ))}
        </ul> 
      )}    

          

    </div>
  )
}

export default NavBar
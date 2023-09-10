import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-bl from-indigo-900 via-black to-black text-white py-[30rem] md:py-[8rem]'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl front-bold inline border-b-4 border-gray-500'>
            About 
          </p>
        </div>

        <p className='text-xl mt-20 tracking-wider'>
        Meet Aman Singh, a 20-year-old college student studying Bio-technolgy at NIT rourkela. I'm a motivated and hardworking individual with a passion for technology and programming. 
        </p>
        <br />
        <p className='text-xl tracking-wider'>
        I'm always looking for ways to improve and stay current in the field. And try to be an active member of the college's computer club and if given an opportunity, also try on leadership roles in various group projects.
        </p>

      </div>
    </div>
  )
}

export default About
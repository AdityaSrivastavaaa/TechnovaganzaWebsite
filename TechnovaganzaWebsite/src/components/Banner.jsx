import React from 'react'
import img from "../assets/LOGO-removebg.png"
import img2 from "../assets/webWallpaper.webp"
import Events from './Events.jsx'
import video1 from "../assets/stars2.mp4"
import Footer from './Footer.jsx'
const Banner = () => {
  return (
    <>
   <header className="bg-black relative flex items-center justify-center h-screen pb-12 overflow-hidden">
          <div className="relative z-30 p-10 text-white  bg-opacity-50 text-center">
            <img src={img} alt="" />
            <button className="text-white  border-spacing-2 py-4 border w-fit  bg-yellow-500 hover:bg-yellow-600 text-white font-extrabold px-5 border border-yellow-600 rounded   transition: all 0.2s ease-in-out; hover:shadow-2xl mt-20  ">
              <a href="#book">Register Now</a>
            </button>
          </div>
          <video
            className="videoTag absolute z-10 w-auto min-w-full min-h-full max-w-none"
            autoPlay
            loop
            muted
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
    <div className="text-center p-20  bg-[url('/src/assets/robo-removebg.png')] bg-no-repeat bg-black bg-center ">
    <h1 className='pb-8 text-yellow-400 text-5xl  font-semibold '>ABOUT</h1>
      <div id='about' className='grid grid-cols-2 ml-0 col-auto content-center justify-items-center'>
           
            <div className='max-w-sm p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-0 text-white text-justify'>
              <h1 className='text-yellow-500 text-xl font-bold p-3 '>Technovaganza 2024</h1>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur magni explicabo cupiditate nobis enim quae dolorum tenetur, rem tempore laborum vel delectus necessitatibus impedit ipsum mollitia velit laudantium odio? Autem dignissimos cumque obcaecati?</p>
              <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
            </div>
            <div className='max-w-sm p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-0 text-white text-justify'>
              <h1 className='text-yellow-500 text-xl font-bold p-3'>Events</h1>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur magni explicabo cupiditate nobis enim quae dolorum tenetur, rem tempore laborum vel delectus necessitatibus impedit ipsum mollitia velit laudantium odio? Autem dignissimos cumque obcaecati?</p>
              <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
            </div>
            <div className='max-w-sm p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-0 text-white text-justify'>
              <h1 className='text-yellow-500 text-xl font-bold p-3'>Programs</h1>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur magni explicabo cupiditate nobis enim quae dolorum tenetur, rem tempore laborum vel delectus necessitatibus impedit ipsum mollitia velit laudantium odio? Autem dignissimos cumque obcaecati?</p>
              <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
            </div>
            <div className='max-w-sm p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-0 text-white text-justify'>
              <h1 className='text-yellow-500 text-xl font-bold p-3'>Initiatives</h1>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur magni explicabo cupiditate nobis enim quae dolorum tenetur, rem tempore laborum vel delectus necessitatibus impedit ipsum mollitia velit laudantium odio? Autem dignissimos cumque obcaecati?</p>
              <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
            </div>
            <div className='max-w-sm p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-0 text-white text-justify'>
              <h1 className='text-yellow-500 text-xl font-bold p-3'>Workshops</h1>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur magni explicabo cupiditate nobis enim quae dolorum tenetur, rem tempore laborum vel delectus necessitatibus impedit ipsum mollitia velit laudantium odio? Autem dignissimos cumque obcaecati?</p>
              <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
            </div>
            <div className='max-w-sm p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-opacity-0 text-white text-justify'>
              <h1 className='text-yellow-500 text-xl font-bold p-3'>Learnings</h1>
              <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur magni explicabo cupiditate nobis enim quae dolorum tenetur, rem tempore laborum vel delectus necessitatibus impedit ipsum mollitia velit laudantium odio? Autem dignissimos cumque obcaecati?</p>
              <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
            </div>
      </div>
    </div>
    <div className="bg-[url('/src/assets/blackBg.webp')]  ">
      <div className='flex items-center justify-center mx-auto p-40'>
      <div className='mr-40'>
        <img src={img2} alt="" />
      </div>
      <div className='text-white h-52'>
        <h1 className='text-yellow-500 text-6xl font-bold p-3'>EVENTS</h1>
        <h2 className='text-2xl p-3'>NANO-NAVIGATOR</h2>
        <p className='text-xl p-3'>"Maze Mastery Begins , Navigate the Future with your Micro Buddy"</p>
        <button className='border border-yellow-500 px-4 py-3 ml-3'>
          <a href="#Events">Explore More</a>
        </button>
      </div>
      </div>
    </div>
   <Footer/>

    </>
    
  )
}

export default Banner

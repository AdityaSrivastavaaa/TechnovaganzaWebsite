import React from "react";
import video from "../assets/backvideo.mp4";
import app from "../assets/appDev.webp";
import web from "../assets/webDev.webp";
import hack from "../assets/hackathon.webp";
import Footer from "./Footer";
const Events = () => {
  return (
    <>
      <div className="bg-black">
        <header className="bg-black relative flex items-center justify-center h-screen pb-12 overflow-hidden">
          <div className="relative z-30 p-10 text-white  bg-opacity-50 text-center">
            <h4 className="text-2xl">WELCOME TO TECHNOVAGANZA 2024</h4>
            <h1 className="text-9xl text-yellow-400 font-bold ">EVENTS</h1>
            <p className="text-xl">Experience a Dynamic Tech Fest.</p>
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
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
        <div
          id="EventCards"
          className=" rounded-xl border-solid bg-transparent opacity-4 w-5/6 h-4/6 grid grid-cols-3 justify-items-center m-auto"
        >
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
          <div class="max-w-sm bg-transparent  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img class="" src={app} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow-400 ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-white ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="border border-yellow-500 px-4 py-3 ml-3 hover:bg-yellow-300 hover:text-black">
                <a href="#Events" className="text-white hover:text-black">
                  Explore More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Events;

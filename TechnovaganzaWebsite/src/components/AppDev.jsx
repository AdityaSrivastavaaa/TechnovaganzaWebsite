import React from "react";
import hack from "../assets/hack2.webp";
import Appdev from "../assets/appDev.webp"
import Footer from "./Footer";
const app = () => {
  return (
    <>
      <div className="text-white w-5/6 h-5/6 bg-transparent  m-auto flex flex-col items-center mb-20  rounded-md">
        <div className="w-full relative z-0  text-white  bg-opacity-50 text-center">
          <img src={Appdev} alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex justify-center items-end z-10 mb-5">
            <button className="text-white  border-spacing-2 py-4 border w-fit  bg-yellow-500 hover:bg-yellow-600 text-white font-extrabold px-5 border border-yellow-600 rounded   transition: all 0.2s ease-in-out; hover:shadow-2xl   ">
              <a href="#book">Register Now</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full pt-10 ">
          <div className="text-center pb-10 ">
            <h1 className="pb-8 text-yellow-400 text-2xl  font-semibold">Description</h1>
            <p className="text-l text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              odio adipisci unde. Neque doloremque quis eius velit maiores.
              Soluta, molestiae!
            </p>
          </div>
          <div className="flex flex-col justify-items-center text-center pb-20">
            <h1 className="pb-8 text-yellow-400 text-3xl  font-semibold">Rules</h1>
            <div className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident exercitationem quaerat labore voluptatem quos dolor ipsam! Impedit, quae laboriosam? Corporis facere nihil ducimus.
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default app;

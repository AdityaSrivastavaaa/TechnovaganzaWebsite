import React from 'react'
import img from "../assets/LOGO.png"
const Banner = () => {
  return (
    <div className='bg-slate-900'>
      <div id='main' className="flex w-5/6 flex-col justify-center mx-auto">
          <img src={img} alt="" />
          <button className='text-white border-spacing-2 '><a href="#book">BOOK TICKET</a></button>
      </div>
    </div>
  )
}

export default Banner

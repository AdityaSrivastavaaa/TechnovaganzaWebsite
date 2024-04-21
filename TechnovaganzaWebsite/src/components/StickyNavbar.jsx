// StickyNavbar.js
import React from 'react';
import img from "../assets/LOGO-removebg.png"
import { Link } from 'react-router-dom';

const StickyNavbar = () => {
  return (
    <div className='sticky z-50 top-0'>
      <nav className='flex justify-between items-center text-white z-50 py-8 px-6 w-full bg-transparent opacity-3 backdrop-filter backdrop-blur-lg'>
        <img src={img} alt="" className='w-56'/>
        <ul className="flex space-x-20">
        <li className='text-3xl text-yellow-300 hover:text-blue-950 '>
            <Link to="/" style={{ textDecoration: 'none' } }>HOME</Link>
          </li>
          <li className='text-3xl text-yellow-300 hover:text-blue-950'>
            <Link to="/Events" style={{ textDecoration: 'none' }}>EVENTS</Link>
          </li>
          <li className='text-3xl text-yellow-300 hover:text-blue-950'>
            <Link to="/Gallery" style={{ textDecoration: 'none' }}>GALLERY</Link>
          </li>
        </ul>
        <div className='flex space-x-4'>
         
          <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
            <Link to="#Register" style={{ textDecoration: 'none' }}>REGISTER</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavbar;

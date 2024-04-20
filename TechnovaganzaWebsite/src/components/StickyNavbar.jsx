import React from 'react';
import { Link } from 'react-router-dom';

const StickyNavbar = () => {
  return (
    <div className='sticky top-0'>
      <nav className='flex justify-between items-center text-white z-50 py-8 px-6 w-full bg-opacity-60 bg-[url(/src/assets/starbg.webp)]'>
        <ul className="flex space-x-4">
          
          <li>
            <Link to="Events">Events</Link>
          </li>
          <li>
            <Link to="Gallery">Gallery</Link>
          </li>
        </ul>
        <div className='flex space-x-4'>
          <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
            <a href="#Login">LOGIN</a>
          </button>
          <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
            <a href="#Register">REGISTER</a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavbar;

import React from 'react'

const StickyNavbar = () => {
  return (
    <div className='sticky top-0'>
      
      <div className='flex justify-between  items-center  text-white  z-50 py-8 px-6 w-full bg-opacity-60 bg-[url(/src/assets/starbg.webp)]'>
        <a href="#Home" className=' hover:text-yellow-500 
        hover:underline'>LOGO</a>
        
        <a href="#Events" className='hover:text-yellow-500 hover:underline transition delay-150 duration-300 ease-in-out'>EVENTS</a>
        <a href="#Gallery" className='hover:text-yellow-500 hover:underline transition delay-150 duration-300 ease-in-out'>GALLERY</a>
        <div className='flex  w-1/6 space-x-20 right-0 items-center'>
        <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'><a href="#Login">LOGIN</a></button>
        <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'><a href="#Register">REGISTER</a></button>
        </div>
      </div>
     </div>
  )
}

export default StickyNavbar


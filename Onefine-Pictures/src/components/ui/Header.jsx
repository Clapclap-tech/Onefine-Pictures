import React, { useEffect, useState } from 'react'
import Button from './Button'

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed h-20 top-0 left-0 w-full z-50 p-8 flex items-center transition-all duration-300 ${
    scrolled
    ? "bg-white-800/90 backdrop-blur-md shadow-lg"
    : "bg-transparent"
    }`}
    >
        <div className=" font-bold text-lg">
           <a href='#'> <img src="./src/assets/Logo.png" alt="Logo"  className='h-14'/></a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 space-x-8 font-bold text-xl flex justify-center items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className='w-2 h-2 bg-red-600 rounded-full'></span>
              <span>HOME</span>
            </a>
            <a href="/gallery" className="flex items-center space-x-2">
              <span className='w-2 h-2 bg-red-600 rounded-full'></span>
              <span>GALLERY</span>
            </a>
            <a href="/packages" className="flex items-center space-x-2">
              <span className='w-2 h-2 bg-red-600 rounded-full'></span>
              <span>PACKAGES</span>
            </a>
            <a href="/about" className="flex items-center space-x-2">
              <span className='w-2 h-2 bg-red-600 rounded-full'></span>
              <span>ABOUT</span>
            </a>
        </div>

        <div className="ml-auto">
            <Button className='bg-red-600 px-4 py-2 text-white'>LOGIN</Button>
        </div>
        
    </nav>
  )
}

export default Header;
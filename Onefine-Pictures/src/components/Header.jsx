import React, { useEffect, useState } from 'react'

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
    <nav className={`fixed h-18 top-0 left-0 w-full backdrop-blur-lg shadow-xl/30 z-50 p-8 flex items-center transition-all duration-300 ${
    scrolled
    ? "bg-blue-800/90 backdrop-blur-md shadow-lg"
    : "bg-transparent"
    }`}
    >
        <div className=" font-bold text-lg">
            <span>Onefine Pictures</span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 space-x-6 font-bold justify-center">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Packages</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>

        
    </nav>
  )
}

export default Header;
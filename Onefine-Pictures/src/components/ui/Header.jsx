import React, { useEffect, useState } from "react";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger menu icons

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed h-20 top-0 left-0 w-full z-50 p-4 md:p-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      {/* Logo */}
      <div className="font-bold text-lg">
        <a href="#">
          <img src="./src/assets/Logo.png" alt="Logo" className="h-14" />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 font-bold text-xl">
        <a href="/" className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          <span>HOME</span>
        </a>
        <a href="/gallery" className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          <span>GALLERY</span>
        </a>
        <a href="/packages" className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          <span>PACKAGES</span>
        </a>
        <a href="/about" className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          <span>ABOUT</span>
        </a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block ml-auto">
        <Button className="bg-red-600 px-4 py-2 text-white">LOGIN</Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden">
          <a href="/" className="flex items-center space-x-2 text-lg font-bold">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span>HOME</span>
          </a>
          <a href="/gallery" className="flex items-center space-x-2 text-lg font-bold">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span>GALLERY</span>
          </a>
          <a href="/packages" className="flex items-center space-x-2 text-lg font-bold">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span>PACKAGES</span>
          </a>
          <a href="/about" className="flex items-center space-x-2 text-lg font-bold">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span>ABOUT</span>
          </a>
          <Button className="bg-red-600 px-6 py-2 text-white mt-2">LOGIN</Button>
        </div>
      )}
    </nav>
  );
};

export default Header;

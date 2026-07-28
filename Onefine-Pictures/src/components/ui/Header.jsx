import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];
  
  return (
<header className="fixed top-0 left-0 w-full z-50">  
  <div className="absolute inset-0 h-24 bg-gradient-to-b from-black/70 to-transparent"></div>

  <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-20">
        {/* Logo */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <img src="./Logo.png" alt="Logo" className="h-12" />
        </Link>

        {/* Left Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.3em] font-medium">
          {navItems.slice(0, 3).map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition duration-300 ${
                  isActive ? "text-red-600" : "text-gray-300 hover:text-white"
                } group`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Centered Logo */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
        >
          <img src="/Logo.png" alt="Logo" className="h-12" />
        </Link>

        {/* Right Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.3em] font-medium">
          {navItems.slice(3).map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition duration-300 ${
                  isActive ? "text-red-600" : "text-gray-300 hover:text-white"
                } group`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 text-sm tracking-widest font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`transition duration-300 ${
                  isActive ? "text-red-600" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
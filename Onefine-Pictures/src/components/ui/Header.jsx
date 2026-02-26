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
  ];

  return (
    <header className="fixed font-body font-bold top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="./Logo.png" alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.3em] font-medium">
          {navItems.map((item) => {
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
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] bg-red-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
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

      {/* Subtle bottom divider */}
      <div className="h-[1px] bg-white/10 w-full"></div>
    </header>
  );
};

export default Header;
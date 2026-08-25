import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const isHomePage = location.pathname === "/";
  const isGalleryPage = location.pathname === "/gallery";

  return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
                isHomePage
                    ? "bg-transparent"
                    : isGalleryPage
                    ? "bg-black"
                    : "bg-black"
            }`}
        >
      {/* Desktop Header */}
      <div className="relative flex items-center justify-between px-6 md:px-10 py-4">

        {/* Left - Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-12"
          />
        </Link>

        {/* Center - Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 text-xs tracking-[0.3em] font-bold">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`transition duration-300 ${
                  isActive
                    ? "text-red-600"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-gray-300 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen
            ? "max-h-96 bg-black"
            : "max-h-0 bg-transparent"
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
                  isActive
                    ? "text-red-600"
                    : "text-gray-300 hover:text-white"
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

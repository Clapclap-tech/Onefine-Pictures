import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-[0_-20px_30px_-20px_rgba(0,0,0,0.25)] font-heading">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid gap-16 md:grid-cols-5">

          {/* Logo (UNCHANGED) */}
          <div>
            <img
              src="Logo.png"
              alt="Logo"
              className="h-8"
            />
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-medium mb-6">Studio</h4>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li className="hover:text-black transition cursor-pointer">Gallery</li>
              <li className="hover:text-black transition cursor-pointer">Packages</li>
              <li className="hover:text-black transition cursor-pointer">About</li>
              <li className="hover:text-black transition cursor-pointer">Tracker</li>
              <li className="hover:text-black transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li className="hover:text-black transition cursor-pointer">Instagram</li>
              <li className="hover:text-black transition cursor-pointer">Facebook</li>
              <li className="hover:text-black transition cursor-pointer">Twitter</li>
              <li className="hover:text-black transition cursor-pointer">LinkedIn</li>
              <li className="hover:text-black transition cursor-pointer">Email</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <h4 className="font-medium mb-6">Updates</h4>
            <p className="text-sm text-neutral-700 mb-6 leading-relaxed">
              Get the latest news and special offers delivered straight to your inbox.
            </p>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-neutral-400 px-4 py-2 text-sm w-full focus:outline-none focus:border-black transition"
              />
              <button className="border border-neutral-400 px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                Join
              </button>
            </div>

            <p className="text-xs text-neutral-500 mt-4">
              We respect your privacy and only send what matters.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-300 my-16"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-neutral-700">

          <div className="flex flex-wrap gap-6">
            <span>© 2026 Onefine Pictures. All rights reserved.</span>
            <a href="#" className="underline hover:text-black transition">Privacy Policy</a>
            <a href="#" className="underline hover:text-black transition">Terms of Service</a>
            <a href="#" className="underline hover:text-black transition">Cookies Settings</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-neutral-700 hover:text-black hover:scale-110 transition duration-300 cursor-pointer text-sm" />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-neutral-700 hover:text-black hover:scale-110 transition duration-300 cursor-pointer text-sm" />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-neutral-700 hover:text-black hover:scale-110 transition duration-300 cursor-pointer text-sm" />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-neutral-700 hover:text-black hover:scale-110 transition duration-300 cursor-pointer text-sm" />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-neutral-700 hover:text-black hover:scale-110 transition duration-300 cursor-pointer text-sm" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

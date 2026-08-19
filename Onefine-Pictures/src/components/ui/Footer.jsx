import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-outfit">

      {/* =========================
          SOCIAL MEDIA BAR
      ========================== */}
      <div className="w-full bg-[#ed0b00]">
        <div className="max-w-7xl mx-auto h-[42px] flex items-center justify-center">
          <div className="flex items-center gap-5 text-white">

            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram className="text-[14px]" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaFacebookF className="text-[13px]" />
            </a>

            <a
              href="#"
              aria-label="X"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaXTwitter className="text-[13px]" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedinIn className="text-[13px]" />
            </a>

            <a
              href="#"
              aria-label="Email"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaEnvelope className="text-[13px]" />
            </a>

          </div>
        </div>
      </div>


      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-14">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[2fr_1fr_1fr_1.4fr]
            gap-10
            lg:gap-16
            py-8
          "
        >

          {/* =========================
              COMPANY / LOGO
          ========================== */}
          <div>

            {/* Logo */}
            <img
              src="/Logo-black.png"
              alt="Onefine Pictures"
              className="w-[200px] sm:w-[210px] h-auto mb-4"
            />

            {/* Address */}
            <p className="text-[12px] leading-relaxed text-neutral-700 mb-3">
              Basement 2, Robinsons Galleria - Cebu City
            </p>

            {/* Email */}
            <a
              href="mailto:info@onefinepictures.com"
              className="
                flex
                items-center
                gap-2
                text-[12px]
                text-neutral-700
                hover:text-black
                transition
                mb-5
              "
            >
              <FaEnvelope className="text-[8px]" />
              info@onefinepictures.com
            </a>

            {/* Contact Numbers */}
            <div className="grid grid-cols-3 gap-1 max-w-[300px]">

              <div>
                <p className="font-semibold text-[12px] mb-1">
                  Mobile Studio
                </p>
                <p className="text-[10px] text-neutral-600">
                  0991 248 0615
                </p>
              </div>

              <div>
                <p className="font-semibold text-[12px] mb-1">
                  Marketing 
                </p>
                <p className="text-[10px] text-neutral-600">
                  0964 496 0615
                </p>
              </div>

              <div>
                <p className="font-semibold text-[12px] mb-1">
                  Customer Service
                </p>
                <p className="text-[10px] text-neutral-600">
                  0991 248 0615
                </p>
              </div>

            </div>

          </div>


          {/* =========================
              COMPANY
          ========================== */}
          <div>

            <h3 className="text-[15px] font-medium mb-3">
              Company
            </h3>

            <ul className="space-y-1.5 text-[11px] text-neutral-700">

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              STUDIO
          ========================== */}
          <div>

            <h3 className="text-[15px] font-medium mb-3">
              Studio
            </h3>

            <ul className="space-y-1.5 text-[11px] text-neutral-700">

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Packages
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Tracker
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#ed0b00] transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* =========================
              UPDATES
          ========================== */}
          <div className="max-w-[240px]">

            <h3 className="text-[15px] font-medium mb-4">
              Updates
            </h3>

            <p className="text-[10px] leading-[1.5] text-neutral-700 mb-3">
              Get the latest news and special offers delivered
              straight to your inbox.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center"
            >

              <input
                type="email"
                placeholder="Your Email Address"
                className="
                  w-full
                  min-w-0
                  h-[28px]
                  px-3
                  bg-white
                  border
                  border-neutral-200
                  shadow-sm
                  outline-none
                  text-[10px]
                  placeholder:text-neutral-400
                  focus:border-neutral-400
                  transition
                "
              />

              <button
                type="submit"
                className="
                  ml-2
                  h-[28px]
                  px-3
                  bg-[#ed0b00]
                  text-white
                  rounded-[5px]
                  text-[9px]
                  font-semibold
                  hover:bg-black
                  transition
                  duration-200
                "
              >
                JOIN
              </button>

            </form>

          </div>

        </div>


        {/* =========================
            BOTTOM SECTION
        ========================== */}
        <div
          className="
            border-t
            border-neutral-200
            py-4
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >

          {/* Copyright */}
          <p className="text-[8px] text-neutral-500">
            © 2026 Onefine Pictures. All rights reserved.
          </p>


          {/* Legal Links */}
          <div className="flex items-center flex-wrap gap-7">

            <a
              href="#"
              className="
                text-[8px]
                text-neutral-600
                underline
                underline-offset-2
                hover:text-black
                transition
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-[8px]
                text-neutral-600
                underline
                underline-offset-2
                hover:text-black
                transition
              "
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="
                text-[8px]
                text-neutral-600
                underline
                underline-offset-2
                hover:text-black
                transition
              "
            >
              Cookies Settings
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
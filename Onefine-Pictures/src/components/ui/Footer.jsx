import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        <div>
          <img
            src="/src/assets/Logo.png"
            alt="Onefine Pictures"
            className="h-12 mb-4"
          />
          <p className="text-sm text-blue-200 leading-relaxed">
            Capturing timeless moments through creative storytelling and
            professional photography.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-blue-200">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#packages" className="hover:text-white">Packages</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>📍 Cebu City, Philippines</li>
            <li>📞 +63 912 345 6789</li>
            <li>✉️ onefinepictures@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>

      </div>

      <div className="border-t border-black text-center py-4 text-sm text-blue-300">
        © {new Date().getFullYear()} Onefine Pictures. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-[0_-20px_30px_-20px_rgba(0,0,0,0.25)]]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid gap-16 md:grid-cols-5">

          {/* Logo */}
          <div>
            <img
              src="/src/assets/Logo.png"
              alt="Logo"
              className="h-8"
            />
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-medium mb-6">Studio</h4>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li>Gallery</li>
              <li>Packages</li>
              <li>About</li>
              <li>Tracker</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li>Home</li>
              <li>Portfolio</li>
              <li>Sessions</li>
              <li>Prints</li>
              <li>Inquire</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Email</li>
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
                className="border border-neutral-400 px-4 py-2 text-sm w-full focus:outline-none"
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
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Terms of Service</a>
            <a href="#" className="underline">Cookies Settings</a>
          </div>

          <div className="flex items-center gap-5">
            <span>FB</span>
            <span>IG</span>
            <span>X</span>
            <span>IN</span>
            <span>YT</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

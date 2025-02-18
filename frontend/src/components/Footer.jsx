// src/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are passionate about sharing knowledge and insights through our
              blog. Join us on our journey!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest posts and news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            &copy; 2023 Your Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

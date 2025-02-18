import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <nav className="bg-[#f5ebe0] shadow-lg sticky top-0 z-50 px-4 py-2">
      <div className="flex items-center justify-between container mx-auto">
        <div className="font-semibold text-xl">
          <Link to="/">
            Blog<span className="text-blue-500 animate-pulse">Nest</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="mx-6">
          <ul className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-blue-500  transition duration-300 transform hover:scale-105 relative group px-2 py-1"
            >
              <span className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                HOME
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/blogs"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105 relative group px-2 py-1"
            >
              <span className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                BLOGS
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/creators"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105 relative group px-2 py-1"
            >
              <span className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                CREATORS
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105 relative group px-2 py-1"
            >
              <span className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                ABOUT
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105 relative group px-2 py-1"
            >
              <span className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                CONTACT
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          </ul>
          <div className="md:hidden" onClick={() => setShow(!show)}>
            {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-2">
          {isAuthenticated && profile?.user?.role === "admin" ? (
            <Link
              to="/dashboard"
              className="relative overflow-hidden group bg-[#a2d2ff] -500 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10">DASHBOARD</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ) : null}

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="bg-red-600 text-white font-semibold hover:bg-red-700 duration-300 px-4 py-2 rounded transition transform hover:scale-105 hover:shadow-lg"
            >
              LOGIN
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="relative overflow-hidden group bg-[#D4A372] -500 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10">LOGOUT</span>
              <div className="absolute inset-0 bg-[#d4a373] -600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {show && (
        <div className="bg-white">
          <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
            <Link
              to="/"
              onClick={() => setShow(false)}
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              HOME
            </Link>
            <Link
              to="/blogs"
              onClick={() => setShow(false)}
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              BLOGS
            </Link>
            <Link
              to="/creators"
              onClick={() => setShow(false)}
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              CREATORS
            </Link>
            <Link
              to="/about"
              onClick={() => setShow(false)}
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              onClick={() => setShow(false)}
              className="hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              CONTACT
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

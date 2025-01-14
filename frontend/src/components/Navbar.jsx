import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-3xl font-extrabold tracking-wide">Hackyless</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-indigo-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-lg font-semibold hover:text-indigo-200 transition duration-300"
          >
            Events
          </Link>
          <Link
            to="/testimonials"
            className="text-lg font-semibold hover:text-indigo-200 transition duration-300"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold hover:text-indigo-200 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white md:hidden transition-transform transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link
                to="/"
                className="text-xl font-medium hover:text-indigo-200 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="text-xl font-medium hover:text-indigo-200 transition duration-300"
                onClick={toggleMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-xl font-medium hover:text-indigo-200 transition duration-300"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xl font-medium hover:text-indigo-200 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

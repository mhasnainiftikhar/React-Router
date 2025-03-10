import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-white border-b-2 border-gray-200">
      <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 lg:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2021/11/26/HI-logo-design-vector-Graphics-20760112-1-1-580x386.jpg"
              className="mr-3 h-20 w-22"
              alt="Logo"
            />
            <span className="text-white text-2xl font-semibold tracking-wide">
              <i>HI</i>
            </span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white hover:bg-opacity-20"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div
            className={`hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                   ${isActive ? "text-orange-400" : "text-white"}
                   hover:bg-white hover:bg-opacity-20 rounded-lg lg:hover:bg-transparent lg:border-0 
                   lg:hover:text-orange-400 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-400" : "text-white"}
                     hover:bg-white hover:bg-opacity-20 rounded-lg lg:hover:bg-transparent lg:border-0 
                     lg:hover:text-orange-400 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-400" : "text-white"}
                     hover:bg-white hover:bg-opacity-20 rounded-lg lg:hover:bg-transparent lg:border-0 
                     lg:hover:text-orange-400 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                         ${isActive ? "text-orange-400" : "text-white"}
                         hover:bg-white hover:bg-opacity-20 rounded-lg lg:hover:bg-transparent lg:border-0 
                         lg:hover:text-orange-400 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full transition-all ease-in-out duration-300`}
          >
            <ul className="flex flex-col font-medium bg-gradient-to-r from-indigo-500 to-purple-600 border-t border-gray-200">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200
                   ${isActive ? "text-orange-400" : "text-white"}
                   hover:bg-white hover:bg-opacity-20 rounded-lg`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200
                     ${isActive ? "text-orange-400" : "text-white"}
                     hover:bg-white hover:bg-opacity-20 rounded-lg`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200
                     ${isActive ? "text-orange-400" : "text-white"}
                     hover:bg-white hover:bg-opacity-20 rounded-lg`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 px-4 duration-200
                         ${isActive ? "text-orange-400" : "text-white"}
                         hover:bg-white hover:bg-opacity-20 rounded-lg`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex items-center lg:order-2 space-x-4">
            <Link
              to="#"
              className="text-white hover:bg-white hover:bg-opacity-20 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

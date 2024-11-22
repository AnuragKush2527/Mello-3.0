import React, { useState, useEffect } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LogoWithTagline from './LogoWithTagline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth logic
  const location = useLocation();
  
  useEffect(() => {
    // Check for token in localStorage (or any other method you're using)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <LogoWithTagline />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Events", "Groups", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`text-gray-600 hover:text-purple-600 transition-colors ${location.pathname === `/${item.toLowerCase()}`
                  ? "text-purple-600 font-semibold"
                  : ""
                  }`}
              >
                {item}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors" />

              {/* Conditionally render based on login status */}
              {isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden transform transition-transform duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Events", "Groups", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item}
              </Link>
            ))}
            {/* Conditionally render based on login status */}
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 bg-purple-600 text-white rounded-full text-center hover:bg-purple-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

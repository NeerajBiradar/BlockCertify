import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#060B0F] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="white" />
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#000" />
          </svg>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-16">
          <Link to="/" className="text-white text-lg">Home</Link>
          <Link to="/fetch" className="text-white text-lg">Fetch All</Link>
          <Link to="/generate" className="text-white text-lg">Generate</Link>
          <Link to="/about" className="text-white text-lg">About Us</Link>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/signup" className="bg-[#060B0F] text-white py-2 px-4 rounded-xl border border-white hover:bg-blue-700">
            Sign Up
          </Link>
          <Link to="/login" className="bg-[#060B0F] text-white py-2 px-4 rounded-xl border border-white hover:bg-blue-700" onClick={handleLoginClick}>
            Login
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 text-base font-medium">Home</Link>
            <Link to="/fetch" className="text-white block px-3 py-2 text-base font-medium">Fetch All</Link>
            <Link to="/generate" className="text-white block px-3 py-2 text-base font-medium">Generate</Link>
            <Link to="/about" className="text-white block px-3 py-2 text-base font-medium">About Us</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <Link to="/signup" className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">Sign Up</Link>
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleLoginClick}>Login</Link>
            </div>
          </div>
        </div>
      )}
      
      {/* {showLoginForm && <LoginForm />} */}
    </nav>
  );
}

export default Navbar;

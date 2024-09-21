import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  return (
    <nav className="w-full bg-[#060B0F] py-4">
      <div className="container mx-auto flex justify-between items-center">
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
        <div className="flex-1 flex justify-center space-x-16">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <Link to="/fetch" className="text-white text-lg">
            Fetch All
          </Link>
          <Link to="/generate" className="text-white text-lg">
            Generate
          </Link>
          <Link to="/about" className="text-white text-lg">
            About Us
          </Link>
        </div>
        <div className="mr-4 flex space-x-4">
          <Link
            to="/signup"
            className="bg-[#060B0F] text-white py-2 px-4 rounded-xl border border-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-[#060B0F] text-white py-2 px-4 rounded-xl border border-white hover:bg-blue-700"
            onClick={handleLoginClick}
          >
            Login
          </Link>
        </div>
      </div>
      {/* {showLoginForm && <LoginForm />} */}
    </nav>
  );
}

export default Navbar;

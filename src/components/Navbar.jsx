import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" z-10 text-white shadow-lg p-4 fixed w-full bg-custom-nav">
      {" "}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/"><em>Sps</em></Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/academics" className="hover:text-gray-300">
            Academics
          </Link>
          <Link to="/admissions" className="hover:text-gray-300">
            Admissions
          </Link>
          <Link to="/faculty" className="hover:text-gray-300">
            Faculty
          </Link>
          <Link to="/students" className="hover:text-gray-300">
            Students
          </Link>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link to="/" className="block py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:bg-gray-700">
            About Us
          </Link>
          <Link to="/academics" className="block py-2 hover:bg-gray-700">
            Academics
          </Link>
          <Link to="/admissions" className="block py-2 hover:bg-gray-700">
            Admissions
          </Link>
          <Link to="/faculty" className="block py-2 hover:bg-gray-700">
            Faculty
          </Link>
          <Link to="/students" className="block py-2 hover:bg-gray-700">
            Students
          </Link>
          <Link to="/gallery" className="block py-2 hover:bg-gray-700">
            Gallery
          </Link>
          <Link to="/contact" className="block py-2 hover:bg-gray-700">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Blue and White Lines */}
      <div className="bg-blue-500 h-8 pr-2">
        <div className="hidden lg:flex flex-row items-center justify-end text-sm space-x-4">
          {/* Mail and Phone Icons */}
          <a
            href="mailto:support@registerkaro.in"
            className="hover:text-yellow-300 m-2 flex items-center space-x-2"
          >
            <i className="fas fa-envelope"></i>
            <span>support@registerkaro.in</span>
          </a>
          <a href="tel:+918447746183" className="hover:text-yellow-300 m-2 flex items-center space-x-2">
            <i className="fas fa-phone-alt"></i>
            <span>+91 844 774 6183</span>
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        </div>

      {/* Header Section */}
      <header className="container mx-auto flex items-center justify-between py-4 px-6 text-black bg-white">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-yellow-400">RegisterKaro</h1>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-blue-900">
            <i
              className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}
            ></i>
          </button>
        </div>

        {/* Center Section: Navigation */}
        <nav className={`md:flex ${isMenuOpen ? 'flex-col' : 'hidden'} md:flex-row space-x-8 mt-4 md:mt-0`}>
          <a href="#home" className="hover:text-yellow-300 py-2 px-4">
            Home
          </a>
          <a href="#services" className="hover:text-yellow-300 py-2 px-4">
            Our Services
          </a>
          <a href="#blog" className="hover:text-yellow-300 py-2 px-4">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-300 py-2 px-4">
            Contact Us
          </a>
          <a href="#about" className="hover:text-yellow-300 py-2 px-4">
            About Us
          </a>
        </nav>

        {/* Right Section: Contact Details and CTA */}
        <div className="flex items-center space-x-6">
          {/* Call to Action Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-md">
            Talk An Expert
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full p-4 shadow-lg text-black">
          <div className="flex justify-end">
            {/* Close Button Inside Popup */}
            <button onClick={closeMenu} className="text-blue-900 text-2xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-4">
            <a href="#home" className="hover:text-yellow-300 py-2 px-4">
              Home
            </a>
            <a href="#services" className="hover:text-yellow-300 py-2 px-4">
              Our Services
            </a>
            <a href="#blog" className="hover:text-yellow-300 py-2 px-4">
              Blog
            </a>
            <a href="#contact" className="hover:text-yellow-300 py-2 px-4">
              Contact Us
            </a>
            <a href="#about" className="hover:text-yellow-300 py-2 px-4">
              About Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;

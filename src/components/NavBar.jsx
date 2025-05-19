"use client";

import { useState, useEffect } from "react";
import { navLinks, specialLinks } from "@/constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // cleanup the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Handle resize to close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header
      className={`max-w-screen fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-700/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="/"
          className="text-white font-bold text-2xl tracking-wider hover:text-purple-400 transition-colors"
        >
          Casancam<span className="text-purple-400">Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  className="text-white relative px-1 py-2 hover:text-purple-400 transition-colors"
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}

            {/* Special Links */}
            {specialLinks.map(({ link, name, icon }) => (
              <li key={name}>
                <a
                  href={name === "CV Download" ? "/cv.pdf" : link}
                  target={name === "CV Download" ? "_blank" : undefined}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all
        ${
          name === "CV Download"
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "text-white hover:text-purple-400"
        }`}
                >
                  {icon && <span>{icon}</span>}
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="menu-button w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu lg:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-white text-lg block py-2 border-b border-gray-800 hover:text-purple-400 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* Special Links for Mobile */}
              {specialLinks.map(({ link, name, icon }) => (
                <li key={name}>
                  <a
                    href={link}
                    className={`flex items-center gap-2 py-2 ${
                      name === "CV Download"
                        ? "mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg text-center"
                        : "text-white hover:text-purple-400 border-b border-gray-800"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {icon && <span>{icon}</span>}
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaMagic } from "react-icons/fa";
import React from "react";

const Navbar = (): JSX.Element  => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">

              <FaMagic style={{ color: "white" }} className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/") ? "border-b-2 border-purple_col  text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/how-it-works") ? "border-b-2 border-purple_col text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  How it Works
                </Link>
                <Link
                  href="/build-your-resume"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${isActive("/build-your-resume") ? "border-b-2 border-purple_col  text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  Build Your Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/") ? "border-b-2 border-purple_col  text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/how-it-works") ? "border-b-2 border-purple_col  text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            How it Works
          </Link>
          <Link
            href="/build-your-resume"
            className={`block rounded-md px-3 py-2 text-base font-medium ${isActive("/build-your-resume") ? "border-b-2 border-purple_col  text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            Build Your Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

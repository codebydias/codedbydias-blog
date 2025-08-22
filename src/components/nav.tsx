"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50">
      <div className="mx-auto px-4 py-3 max-w-6xl flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold text-gray-800 hover:text-blue-600"
        >
          Codebydias
        </Link>

       
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="nome"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

       
        <ul
          className={`flex flex-col md:flex md:flex-row md:space-x-4 space-y-2 md:space-y-0 absolute md:static top-full left-0 w-full md:w-auto bg-gray-200 md:bg-transparent overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-2" : "max-h-0 md:max-h-full"
          } md:flex`}
        >
          <li>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

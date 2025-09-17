"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center justify-end space-x-6 text-sm font-medium">
            <a
              href="/#oque-fazemos"
              className="text-gray-300 hover:text-white transition"
            >
              O que fazemos?
            </a>
            <a
              href="/#clientes"
              className="text-gray-300 hover:text-white transition"
            >
              Nossos clientes
            </a>
            <a
              href="/#hackatur"
              className="text-gray-300 hover:text-white transition"
            >
              Hackatur
            </a>
            <a
              href="/#depoimentos"
              className="text-gray-300 hover:text-white transition"
            >
              Depoimentos
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl bg-gray-900/95 backdrop-blur-sm border border-gray-700/50">
            <nav className="py-2">
              <a
                href="/#oque-fazemos"
                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                O que fazemos?
              </a>
              <a
                href="/#clientes"
                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossos clientes
              </a>
              <a
                href="/#hackatur"
                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Hackatur
              </a>
              <a
                href="/#depoimentos"
                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
"use client";
import React, { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import CartModal from "./cartModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navItems = [
    "Inicio",
    "Produtos Naturais",
    "Marmitas",
    "Cardapio do Dia",
    "Sobre",
  ];

  return (
    <div className="relative w-full">
      <header className="flex items-center justify-between w-full py-4 px-8 rouunded-full bg-[rgba(255,255,255,0.75)] backdrop-blur-2xl shadow-[0px_20px_40px_rgba(56,102,65,0.06)]">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-[-0.02em] text-[#296b2f]">
          Naturale
        </h1>

        {/* Navigation Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item}
                className="text-sm font-medium uppercase tracking-[0.05em] text-[#4b4f4b] hover:text-[#296b2f] transition-colors duration-300 cursor-pointer"
              >
                <a
                  href=""
                  className="
                  relative inline-block py-2
                  after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:w-full
                  after:origin-left after:scale-x-0
                  after:bg-[#296b2f]
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Acoes Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsOpen(false);
            }}
            className="text-[#4b4f4b] hover:bg-[#296b2f] hover:text-white transition-colors duration-300 p-2 rounded-xl cursor-pointer"
          >
            <ShoppingCart size={20} />
          </button>

          <button className="bg-[#296b2f] text-sm font-semibold tracking-[-0.01em] text-white hover:bg-[#1e5a25] transition-colors duration-300 px-4 py-2 rounded-xl cursor-pointer">
            Entrar
          </button>
        </div>

        {/* Acoes Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsOpen(false);
            }}
            className="text-[#4b4f4b] hover:bg-[#296b2f] hover:text-white transition-colors duration-300 p-2 rounded-xl cursor-pointer"
          >
            <ShoppingCart size={20} />
          </button>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsCartOpen(false);
            }}
            className="text-[#4b4f4b] hover:bg-[#296b2f] hover:text-white transition-colors duration-300 p-2 rounded-xl cursor-pointer"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`
    xl:hidden absolute top-[calc(100%)] left-0 w-full rounded-3xl
    bg-[rgba(255,255,255,0.92)] backdrop-blur-2xl
    shadow-[0px_20px_40px_rgba(56,102,65,0.08)]
    p-6 z-50 origin-top
    transition-all duration-300 ease-out
    ${
      isOpen
        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
    }
  `}
        >
          <nav>
            <ul className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <li
                  key={item}
                  className={`
            transition-all duration-300
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            ${index === 0 ? "delay-75" : ""}
            ${index === 1 ? "delay-100" : ""}
            ${index === 2 ? "delay-150" : ""}
            ${index === 3 ? "delay-200" : ""}
            ${index === 4 ? "delay-300" : ""}
          `}
                >
                  <a
                    href="#"
                    className="text-base font-medium text-[#4b4f4b] hover:text-[#296b2f] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`
      w-full mt-6 bg-[#296b2f] text-white text-sm font-semibold rounded-2xl py-3
      hover:bg-[#1e5a25] transition-all duration-300 delay-300
      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
    `}
          >
            Entrar
          </button>
        </div>
      </header>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Header;

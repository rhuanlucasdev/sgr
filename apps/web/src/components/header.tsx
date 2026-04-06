// components/header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";

import CartModal from "./ui/cartModal";
import { type CartItem } from "@/data/products";

type HeaderProps = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  onOpenCart: () => void;
  onCloseCart: () => void;
  onUpdateCartItemAmount: (index: number, selectedAmount: number) => void;
  onRemoveCartItem: (index: number) => void;
};

const Header = ({
  cartItems,
  isCartOpen,
  onOpenCart,
  onCloseCart,
  onUpdateCartItemAmount,
  onRemoveCartItem,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Produtos Naturais", href: "#products" },
    { label: "Marmitas", href: "#marmitas" },
    { label: "Cardapio do Dia", href: "#cardapio" },
    { label: "Sobre", href: "#sobre" },
  ];

  const handleCartToggle = () => {
    if (isCartOpen) {
      onCloseCart();
    } else {
      onOpenCart();
    }

    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="flex w-full items-center justify-between bg-[rgba(255,255,255,0.45)] px-8 py-4 shadow-[0px_20px_40px_rgba(56,102,65,0.06)] backdrop-blur-2xl md:rounded-full">
        <h1 className="text-2xl font-semibold tracking-[-0.02em] text-[#296b2f]">
          Naturale
        </h1>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="cursor-pointer text-sm font-medium uppercase tracking-[0.05em] text-[#4b4f4b] transition-colors duration-300 hover:text-[#296b2f]"
              >
                <a
                  href={item.href}
                  className="
                    relative inline-block py-2
                    after:absolute after:bottom-0 after:left-0
                    after:h-0.5 after:w-full
                    after:origin-left after:scale-x-0
                    after:bg-[#296b2f]
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={handleCartToggle}
            className="relative cursor-pointer rounded-xl p-2 text-[#4b4f4b] transition-colors duration-300 hover:bg-[#296b2f] hover:text-white"
          >
            <ShoppingCart size={20} />

            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#296b2f] text-[10px] font-bold text-white">
                {cartItems.length}
              </span>
            )}
          </button>

          <Link
            href="/login"
            className="cursor-pointer rounded-xl bg-[#296b2f] px-4 py-2 text-sm font-semibold tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-[#1e5a25]"
          >
            Entrar
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleCartToggle}
            className="relative cursor-pointer rounded-xl p-2 text-[#4b4f4b] transition-colors duration-300 hover:bg-[#296b2f] hover:text-white"
          >
            <ShoppingCart size={20} />

            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#296b2f] text-[10px] font-bold text-white">
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
              onCloseCart();
            }}
            className="cursor-pointer rounded-xl p-2 text-[#4b4f4b] transition-colors duration-300 hover:bg-[#296b2f] hover:text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`
            absolute left-0 top-[calc(100%)] w-full origin-top bg-white p-6 shadow-[0px_20px_40px_rgba(56,102,65,0.08)] transition-all duration-300 ease-out xl:hidden
            ${
              isOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-95 opacity-0"
            }
          `}
        >
          <nav>
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-[#4b4f4b] transition-colors duration-300 hover:text-[#296b2f]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="mt-6 block w-full rounded-2xl bg-[#296b2f] py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e5a25]"
          >
            Entrar
          </Link>
        </div>
      </header>

      <CartModal
        isOpen={isCartOpen}
        onClose={onCloseCart}
        items={cartItems}
        onUpdateItemAmount={onUpdateCartItemAmount}
        onRemoveItem={onRemoveCartItem}
      />
    </div>
  );
};

export default Header;

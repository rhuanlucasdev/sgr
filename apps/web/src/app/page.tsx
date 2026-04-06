// app/page.tsx
"use client";

import { useState } from "react";

import Header from "@/components/header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

import { type CartItem, type Product } from "@/data/products";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, selectedAmount: number) => {
    setCartItems((prev) => [...prev, { ...product, selectedAmount }]);
    setIsCartOpen(true);
  };

  const handleUpdateCartItemAmount = (
    index: number,
    selectedAmount: number,
  ) => {
    if (!Number.isFinite(selectedAmount) || selectedAmount <= 0) return;

    setCartItems((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index ? { ...item, selectedAmount } : item,
      ),
    );
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#1A1C1C] font-sans">
      <Header
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        onOpenCart={() => setIsCartOpen(true)}
        onCloseCart={() => setIsCartOpen(false)}
        onUpdateCartItemAmount={handleUpdateCartItemAmount}
        onRemoveCartItem={handleRemoveCartItem}
      />

      <Hero />

      <ProductSection onAddToCart={handleAddToCart} />
    </main>
  );
}

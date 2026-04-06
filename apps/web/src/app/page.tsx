import Header from "@/components/header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#1A1C1C] font-sans">
      <Header />

      <Hero />
      <ProductSection />
    </main>
  );
}

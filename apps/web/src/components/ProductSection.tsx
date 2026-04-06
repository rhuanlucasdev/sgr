"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";
import ProductCard from "./ui/productCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type ProductsSectionProps = {
  onAddToCart: (product: Product, selectedAmount: number) => void;
};

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(2);

  const pages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const updateProductsPerPage = () => {
      setProductsPerPage(mediaQuery.matches ? 4 : 2);
    };

    updateProductsPerPage();
    mediaQuery.addEventListener("change", updateProductsPerPage);

    return () => {
      mediaQuery.removeEventListener("change", updateProductsPerPage);
    };
  }, []);

  useEffect(() => {
    if (!api) return;

    const updatePagination = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updatePagination();
    api.on("select", updatePagination);
    api.on("reInit", updatePagination);

    return () => {
      api.off("select", updatePagination);
      api.off("reInit", updatePagination);
    };
  }, [api]);

  return (
    <section className="bg-[#F8F7F2] py-28" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <button
            onClick={() => api?.scrollPrev()}
            className="hidden xl:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E7E7E2] bg-white text-[#1A1C1C] transition-all duration-300 hover:-translate-y-1 hover:border-[#296b2f] hover:text-[#296b2f] relative z-10 top-75 right-15 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 text-center">
            <motion.span
              className="mb-3 block text-xs font-bold uppercase tracking-[0.24em] text-[#296b2f]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              Favoritos da casa
            </motion.span>

            <motion.h2
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1A1C1C] sm:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: 0.05,
              }}
            >
              Nossos Produtos
            </motion.h2>
          </div>

          <button
            onClick={() => api?.scrollNext()}
            className="hidden xl:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E7E7E2] bg-white text-[#1A1C1C] transition-all duration-300 hover:-translate-y-1 hover:border-[#296b2f] hover:text-[#296b2f] relative z-10 top-75 left-15 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 2,
            containScroll: "trimSnaps",
            breakpoints: {
              "(min-width: 1280px)": {
                slidesToScroll: 4,
              },
            },
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.title}
                className="pl-4 basis-1/2 xl:basis-1/4"
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  basePrice={product.basePrice}
                  baseAmount={product.baseAmount}
                  unit={product.unit}
                  onAddToCart={(selectedAmount) =>
                    onAddToCart(product, selectedAmount)
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-12 flex items-center justify-center gap-3">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-[#296b2f]"
                  : "w-2.5 bg-[#D6D8D3] hover:bg-[#B9BCB6]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

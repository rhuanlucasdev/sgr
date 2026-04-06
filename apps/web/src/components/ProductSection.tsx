"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import ProductCard from "./ui/productCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const products = [
  {
    image: "/granola.png",
    title: "Granola",
    description: "Mix crocante de sementes, mel orgânico e coco tostado.",
    price: 34.9,
  },
  {
    image: "/aveia.png",
    title: "Aveia em Flocos",
    description: "Flocos grossos e prensados a frio para maior nutrição.",
    price: 18.5,
  },
  {
    image: "/castanhas.png",
    title: "Castanhas",
    description: "Mix selecionado de castanhas do pará e de caju torradas.",
    price: 42.0,
  },
  {
    image: "/linhaca.png",
    title: "Linhaça",
    description:
      "Semente rica em ômega-3, perfeita para uma alimentação saudável.",
    price: 28.9,
  },
  {
    image: "/cafe.png",
    title: "Café Premium",
    description:
      "Grãos 100% arábica, torrados na medida para um sabor encorpado.",
    price: 16.9,
  },
  {
    image: "/quinoa.png",
    title: "Quinoa Real",
    description:
      "Grão andino rico em proteínas, sem glúten e de fácil preparo.",
    price: 38.5,
  },
  {
    image: "/amendoim.png",
    title: "Amendoim Cru",
    description: "Grãos inteiros e selecionados, sem sal e sem conservantes.",
    price: 14.9,
  },
  {
    image: "/chia.png",
    title: "Chia",
    description:
      "Pequena semente com alto teor de fibras, cálcio e antioxidantes.",
    price: 22.9,
  },
  {
    image: "/feijao-carioca.png",
    title: "Feijão Carioca",
    description: "Grãos novos, colhidos na safra atual, macios e saborosos.",
    price: 12.9,
  },
  {
    image: "/arroz-integral.png",
    title: "Arroz Integral",
    description: "Grão integral com casca preservada para mais fibras e sabor.",
    price: 11.9,
  },
  {
    image: "/grao-de-bico.png",
    title: "Grão-de-Bico",
    description: "Leguminosa versátil, ideal para homus, saladas e ensopados.",
    price: 19.9,
  },
  {
    image: "/lentilha.png",
    title: "Lentilha",
    description: "Grão rico em ferro e proteínas, cozimento rápido e fácil.",
    price: 17.5,
  },
];

const ProductsSection = () => {
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
                  price={product.price}
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

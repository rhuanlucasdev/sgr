"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section
      className="relative overflow-visible bg-linear-to-b from-[#F8F7F2] to-[#FFFFFF]"
      id="inicio"
    >
      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-16 px-6 pb-16 lg:px-10 xl:grid-cols-2">
        {/* Conteúdo da esquerda */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-140"
        >
          <motion.span
            variants={itemVariants}
            className="
              mb-6 inline-flex items-center rounded-full
              bg-[#296b2f]/10 px-4 py-2
              text-sm font-medium text-[#296b2f]
            "
          >
            Alimentação saudável e natural
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="
              mb-6 text-4xl font-semibold leading-[1.02]
              tracking-[-0.04em] text-[#1A1C1C]
              sm:text-5xl lg:text-6xl xl:text-7xl
            "
          >
            O melhor da comida natural,
            <span className="block text-[#296b2f]">feita para você.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="
              mb-10 max-w-130
              text-base leading-8 text-[#5F655F]
              sm:text-lg
            "
          >
            Ingredientes frescos, refeições equilibradas e entrega rápida para
            tornar sua rotina mais leve, saudável e saborosa.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{
                y: -4,
                boxShadow: "0 16px 36px rgba(41,107,47,0.28)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="
                h-14 rounded-full bg-[#296b2f] px-8
                text-sm font-semibold text-white
                cursor-pointer
              "
            >
              Ver Produtos
            </motion.button>

            <motion.button
              whileHover={{
                y: -4,
                backgroundColor: "#1A1C1C",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="
                h-14 rounded-full border-2 border-[#1A1C1C]
                px-8 text-sm font-semibold text-[#1A1C1C]
                cursor-pointer
              "
            >
              Pedir Marmita
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Conteúdo da direita */}
        <div className="relative hidden xl:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative h-162.5 w-155"
          >
            {/* Glow atrás */}
            <div
              className="
        absolute left-1/2 top-1/2
        h-115 w-115
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[#296b2f]/10 blur-[100px]
      "
            />

            {/* Card branco com a imagem ocupando tudo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
        absolute top-0 left-1/2
        h-128 w-lg
        -translate-x-1/2
        overflow-hidden
        rounded-[40px]
        shadow-[0_30px_80px_rgba(0,0,0,0.08)]
      "
            >
              <Image
                src="/hero-main.jpg"
                alt="Produtos naturais"
                fill
                priority
                className="object-fill"
              />
            </motion.div>

            {/* Celular maior, mantendo a mesma posição */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.8,
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
        absolute -bottom-5 -right-30
        z-20
        h-138.75 w-75
      "
            >
              <Image
                src="/cellphone.png"
                alt="Aplicativo Naturale"
                fill
                className="
          object-fill
          drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]
        "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

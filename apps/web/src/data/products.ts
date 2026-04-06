export type Product = {
  image: string;
  title: string;
  description: string;
  basePrice: number; // Valor em reais
  baseAmount: number; // Quantidade de referência (ex: 100, 1)
  unit: "g" | "kg" | "un"; // Unidade de medida
};

export type CartItem = Product & {
  selectedAmount: number;
};

export const products: Product[] = [
  {
    image: "/granola.png",
    title: "Granola",
    description: "Mix crocante de sementes, mel orgânico e coco tostado.",
    basePrice: 3.49,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/aveia.png",
    title: "Aveia em Flocos",
    description: "Flocos grossos e prensados a frio para maior nutrição.",
    basePrice: 2.0, // Regra solicitada: 2 reais
    baseAmount: 100, // a cada 100g
    unit: "g",
  },
  {
    image: "/castanhas.png",
    title: "Castanhas",
    description: "Mix selecionado de castanhas do pará e de caju torradas.",
    basePrice: 4.2,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/linhaca.png",
    title: "Linhaça",
    description:
      "Semente rica em ômega-3, perfeita para uma alimentação saudável.",
    basePrice: 2.89,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/cafe.png",
    title: "Café Premium",
    description:
      "Grãos 100% arábica, torrados na medida para um sabor encorpado.",
    basePrice: 16.9,
    baseAmount: 500, // Exemplo: Preço por pacote de 500g
    unit: "g",
  },
  {
    image: "/quinoa.png",
    title: "Quinoa Real",
    description:
      "Grão andino rico em proteínas, sem glúten e de fácil preparo.",
    basePrice: 3.85,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/amendoim.png",
    title: "Amendoim Cru",
    description: "Grãos inteiros e selecionados, sem sal e sem conservantes.",
    basePrice: 1.49,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/chia.png",
    title: "Chia",
    description:
      "Pequena semente com alto teor de fibras, cálcio e antioxidantes.",
    basePrice: 2.29,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/feijao-carioca.png",
    title: "Feijão Carioca",
    description: "Grãos novos, colhidos na sabra atual, macios e saborosos.",
    basePrice: 12.9,
    baseAmount: 1,
    unit: "kg",
  },
  {
    image: "/arroz-integral.png",
    title: "Arroz Integral",
    description: "Grão integral com casca preservada para mais fibras e sabor.",
    basePrice: 11.9,
    baseAmount: 1,
    unit: "kg",
  },
  {
    image: "/grao-de-bico.png",
    title: "Grão-de-Bico",
    description: "Leguminosa versátil, ideal para homus, saladas e ensopados.",
    basePrice: 1.99,
    baseAmount: 100,
    unit: "g",
  },
  {
    image: "/lentilha.png",
    title: "Lentilha",
    description: "Grão rico em ferro e proteínas, cozimento rápido e fácil.",
    basePrice: 1.75,
    baseAmount: 100,
    unit: "g",
  },
];

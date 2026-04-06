import Image from "next/image";
import { ShoppingBag } from "lucide-react";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

const ProductCard = ({
  image,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <article
      className="
        group flex h-full min-h-60 w-full min-w-0 flex-col
        rounded-3xl bg-white p-3 sm:min-h-60 sm:p-4
        shadow-[0px_20px_40px_rgba(56,102,65,0.04)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0px_20px_40px_rgba(56,102,65,0.08)]
      "
    >
      <div className="relative mb-4 aspect-[0.9] overflow-hidden rounded-[20px] bg-[#f6f6f3] sm:mb-5 sm:rounded-[28px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-base font-semibold text-[#1a1c1c] sm:text-xl">
          {title}
        </h3>

        <p
          className="
            mb-4 line-clamp-4 text-xs leading-5 text-[#6b706b]
            sm:mb-6 sm:min-h-21 sm:text-sm sm:leading-6
          "
        >
          {description}
        </p>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xl font-bold tracking-[-0.03em] text-[#296b2f] sm:text-3xl">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <button
            className="
            group/button
            flex w-full items-center justify-center
            rounded-2xl bg-[#296b2f] px-4 py-3
            text-sm font-semibold text-white
            transition-all duration-300
            hover:bg-[#1f5425]
            hover:shadow-[0px_12px_24px_rgba(41,107,47,0.22)]
            active:scale-[0.98]

            sm:ml-auto
            sm:h-12 sm:w-12 sm:min-w-12 sm:max-w-12
            sm:overflow-hidden
            sm:rounded-full
            sm:px-0

            sm:gap-0
            sm:hover:w-36
            sm:hover:max-w-36
            sm:hover:gap-2
            cursor-pointer
          "
          >
            <ShoppingBag className="h-5 w-5 shrink-0" />

            <span
              className="
              whitespace-nowrap transition-all duration-300

              sm:max-w-0
              sm:overflow-hidden
              sm:opacity-0

              sm:group-hover/button:max-w-22.5
              sm:group-hover/button:opacity-100
            "
            >
              Adicionar
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

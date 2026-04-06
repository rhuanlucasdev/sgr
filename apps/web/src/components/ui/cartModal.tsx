// components/cartModal.tsx
import Image from "next/image";
import { ShoppingCart, Trash2, X } from "lucide-react";

import { type CartItem } from "@/data/products";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateItemAmount: (index: number, selectedAmount: number) => void;
  onRemoveItem: (index: number) => void;
};

const CartModal = ({
  isOpen,
  onClose,
  items,
  onUpdateItemAmount,
  onRemoveItem,
}: CartModalProps) => {
  const formatAmount = (amount: number, unit: CartItem["unit"]) => {
    if (unit === "g" && amount >= 1000) {
      return `${(amount / 1000).toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
      })}kg`;
    }

    return `${amount}${unit}`;
  };

  const getItemTotal = (item: CartItem) =>
    (item.basePrice * item.selectedAmount) / item.baseAmount;

  const total = items.reduce((acc, item) => acc + getItemTotal(item), 0);

  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-100 transition-all duration-500 ease-out
        ${
          isOpen
            ? "pointer-events-auto bg-black/30 opacity-100 backdrop-blur-[2px]"
            : "pointer-events-none bg-black/0 opacity-0 backdrop-blur-0"
        }
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          absolute right-0 top-0 flex h-full w-full flex-col bg-[#F8F7F2] shadow-[-20px_0px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-105
          ${
            isOpen
              ? "translate-x-0 scale-100 opacity-100"
              : "translate-x-full scale-[0.98] opacity-80"
          }
        `}
      >
        <div className="flex items-center justify-between border-b border-[#E6E3DA] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#296b2f]/20 text-[#296b2f]">
              <ShoppingCart size={20} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1a1c1c]">
                Seu Carrinho
              </h2>

              <p className="text-sm text-[#6b706b]">
                {items.length}{" "}
                {items.length === 1 ? "item adicionado" : "itens adicionados"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer rounded-xl p-2 text-[#4b4f4b] transition-colors duration-300 hover:bg-[#296b2f] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#296b2f]/10 text-[#296b2f]">
                <ShoppingCart size={32} />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-[#1a1c1c]">
                Seu carrinho está vazio!
              </h3>

              <p className="max-w-70 text-sm leading-6 text-[#6b706b]">
                Adicione produtos naturais ou marmitas para começar seu pedido.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-center justify-between rounded-2xl border border-[#E6E3DA] bg-white p-4"
                >
                  <div className="grid w-full grid-cols-[48px_1fr] grid-rows-2 gap-x-3 gap-y-1">
                    <div className="relative row-span-2 h-12 w-12 overflow-hidden rounded-lg bg-[#f6f6f3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <h3 className="self-center font-semibold text-[#1A1C1C]">
                        {item.title}
                      </h3>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(index)}
                        className="rounded-lg p-1.5 text-[#6b706b] transition-colors duration-200 hover:bg-[#f3f1ea] hover:text-[#d13f3f]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-sm text-[#6b706b]">
                      <div className="flex items-center gap-2">
                        <span>Qtd:</span>

                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={item.selectedAmount}
                          onChange={(e) => {
                            const selectedAmount = Number(
                              e.target.value.replace(",", "."),
                            );

                            if (
                              Number.isFinite(selectedAmount) &&
                              selectedAmount > 0
                            ) {
                              onUpdateItemAmount(index, selectedAmount);
                            }
                          }}
                          className="w-16 rounded-md border border-[#E6E3DA] bg-[#f8f7f2] px-2 py-1 text-right text-xs text-[#1A1C1C] outline-none"
                        />

                        <span className="text-xs">{item.unit}</span>

                        {item.unit === "g" && item.selectedAmount >= 1000 && (
                          <span className="text-xs text-[#296b2f]">
                            ({formatAmount(item.selectedAmount, item.unit)})
                          </span>
                        )}
                      </div>

                      <span>
                        {getItemTotal(item).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#E6E3DA] p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-[#6b706b]">Total</span>

            <span className="text-lg font-bold text-[#296b2f]">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <button
            disabled={items.length === 0}
            className="w-full rounded-2xl bg-[#296b2f] py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e5a25] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

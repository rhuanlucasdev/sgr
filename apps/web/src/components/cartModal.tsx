import React from "react";
import { X, ShoppingCart } from "lucide-react";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 z-[100]
        transition-all duration-500 ease-out
        ${
          isOpen
            ? "opacity-100 bg-black/30 backdrop-blur-[2px] pointer-events-auto"
            : "opacity-0 bg-black/0 backdrop-blur-0 pointer-events-none"
        }
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          absolute top-0 right-0 h-full
          w-full md:w-[420px]
          bg-[#F8F7F2]
          shadow-[-20px_0px_40px_rgba(0,0,0,0.08)]
          flex flex-col
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-80 scale-[0.98]"
          }
        `}
      >
        {/* Header do Modal */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E6E3DA]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#296b2f]/20 text-[#296b2f]">
              <ShoppingCart size={20} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1a1c1c]">
                Seu Carrinho
              </h2>

              <p className="text-sm text-[#6b706b]">0 itens adicionados</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#4b4f4b] hover:bg-[#296b2f] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#296b2f]/10 text-[#296b2f] mb-6">
            <ShoppingCart size={32} />
          </div>

          <h3 className="text-xl font-semibold text-[#1a1c1c] mb-2">
            Seu carrinho está vazio!
          </h3>

          <p className="text-sm leading-6 text-[#6b706b] max-w-[280px]">
            Adicione produtos naturais ou marmitas para começar seu pedido.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#E6E3DA] p-6">
          <button
            disabled
            className="w-full rounded-2xl bg-[#296b2f] py-4 text-sm font-semibold text-white hover:bg-[#1e5a25] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

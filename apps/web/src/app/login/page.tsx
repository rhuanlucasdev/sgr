import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#e4e4e4] lg:grid lg:grid-cols-2">
      <section className="relative hidden lg:block">
        <Image
          src="/login-photo.svg"
          alt="Alimentação saudável"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[72%] bg-linear-to-r from-[#002205]/60 via-[#002205]/20 to-transparent" />

        <div className="absolute bottom-12 left-12 max-w-md text-white">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em]">
            NATURALE ESSENCE
          </p>
          <h1 className="mb-6 text-6xl font-semibold leading-[1.05] tracking-[-0.03em]">
            Alimente seu
            <br />
            melhor amanhã.
          </h1>
          <p className="text-2xl leading-10 text-white/90">
            Descubra a harmonia entre sabor e saúde com nossos ingredientes
            orgânicos e marmitas artesanais pensadas para o seu bem-estar.
          </p>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center p-6 sm:p-10">
        <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1f6b2f]">
          <Leaf size={12} />
          100% Orgânico
        </div>

        <div className="w-full max-w-md rounded-[28px] bg-[#f4f4f4] p-8 shadow-[0px_30px_60px_rgba(0,0,0,0.08)] sm:p-10">
          <h2 className="mb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f6b2f]">
            Naturale
          </h2>
          <h3 className="mb-3 text-4xl font-semibold tracking-[-0.03em] text-[#1a1c1c]">
            Bem-vindo de volta
          </h3>
          <p className="mb-8 text-lg leading-8 text-[#4d534d]">
            Acesse sua conta para gerenciar seus pedidos e cardápios.
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9aa19a]">
                E-mail
              </label>
              <input
                type="email"
                placeholder="nome@exemplo.com"
                className="h-12 w-full rounded-lg border border-[#e4e4e4] bg-[#e8e8e8] px-4 text-sm text-[#1a1c1c] placeholder:text-[#adb3ad] outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9aa19a]">
                  Senha
                </label>
                <button
                  type="button"
                  className="text-xs font-semibold text-[#1f6b2f] transition-colors hover:text-[#165125]"
                >
                  Esqueci minha senha
                </button>
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-lg border border-[#e4e4e4] bg-[#e8e8e8] px-4 text-sm text-[#1a1c1c] placeholder:text-[#adb3ad] outline-none"
              />
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-[#3f8f4a] text-sm font-semibold text-white transition-colors hover:bg-[#32773c]"
              >
                Entrar
              </button>

              <button
                type="button"
                className="h-12 w-full rounded-full bg-[#e2e2e2] text-sm font-medium text-[#202220] transition-colors hover:bg-[#d8d8d8]"
              >
                Continuar como convidado
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-[#e4e4e4] pt-6 text-center">
            <p className="text-sm text-[#5d625d]">
              Não tem uma conta?{" "}
              <Link
                href="#"
                className="font-semibold text-[#1f6b2f] hover:text-[#165125]"
              >
                Criar Conta
              </Link>
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8c928c]">
              <Link href="#" className="hover:text-[#606660]">
                Ajuda
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#606660]">
                Privacidade
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#606660]">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

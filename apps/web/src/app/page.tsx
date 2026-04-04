import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#F9F9F9]">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#F9F9F9] dark:bg-[#F9F9F9] sm:items-start"></main>
    </div>
  );
}

"use client";
import Image from "next/image";

export default function Header({ handleClick }) {
  return (
    <header className="flex items-center justify-between bg-zinc-100 px-[10%]">
      <a href="/">
        <Image
          className="py-5"
          src={"/logo.png"}
          width={188}
          height={68}
          alt="Logo da escola do real"
          priority
        />
      </a>
      <div className="flex gap-2">
        <button className="hidden items-center justify-between rounded-full bg-blue-500 px-5 py-3 uppercase text-white hover:bg-blue-700 sm:flex sm:rounded-md">
          Fazer Doação
        </button>
        <button className="hidden rounded-full bg-green-500 px-5 py-3 uppercase text-white hover:bg-green-600 sm:flex sm:rounded-md">
          Faça parte
        </button>
        <button className="block sm:hidden">
          <Image
            src="/icons/bars.svg"
            alt="Menu"
            width={30}
            height={32}
            onClick={handleClick}
          />
        </button>
      </div>
    </header>
  );
}

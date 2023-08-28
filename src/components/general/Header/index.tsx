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
        <button className="flex items-center justify-between rounded-full bg-blue-500 px-5 py-3 uppercase text-white hover:bg-blue-700 sm:rounded-md">
          <Image src="/icons/donate.svg" alt="xxx" width={30} height={30} />
          <span className="hidden sm:block">Fazer Doação</span>
        </button>
        <button className="btn-header flex rounded-full bg-green-500 px-5 py-3 uppercase text-white hover:bg-green-600 sm:rounded-md">
          <Image src="/icons/donate.svg" alt="xxx" width={30} height={30} />
          <span className="hidden sm:block">Faça parte</span>
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

"use client";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    href: "#escola-do-real",
    icon: "/icons/globe.svg",
    text: "Conheça a Escola do Real",
    alt: "icon globe",
  },
  {
    href: "#onde-atuamos",
    icon: "/icons/location.svg",
    text: "Onde Atuamos",
    alt: "icon location",
  },
  {
    href: "#nosso-curso",
    icon: "/icons/hands.svg",
    text: "Nosso curso",
    alt: "icon hands",
  },
  {
    href: "#fale-conosco",
    icon: "/icons/talk.svg",
    text: "Fale conosco",
    alt: "icon talk",
  },
];

export default function Navbar() {
  return (
    <nav className="custom-mx-global py-3 text-base font-bold">
      <ul className="block justify-between border-b-2 border-green-500 py-3 sm:flex">
        {data.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target="_parent"
              className="flex h-full items-center gap-2"
            >
              <Image
                className="max-h-8"
                src={item.icon}
                height={35}
                width={35}
                alt={item.alt}
              />
              <span className="text-blue-500">{item.text}</span>
            </Link>
          </li>
        ))}
        <div className="flex">
          <button className="block items-center justify-between rounded-full bg-blue-500 px-5 py-3 uppercase text-white hover:bg-blue-700 sm:hidden sm:rounded-md">
            Fazer Doação
          </button>
          <button className="block rounded-full bg-green-500 px-5 py-3 uppercase text-white hover:bg-green-600 sm:hidden sm:rounded-md">
            Faça parte
          </button>
        </div>
      </ul>
    </nav>
  );
}

import Image from 'next/image'

export default function Header() {
  return (
    <header className="  bg-zinc-100">
      <div className="margin_main flex items-center justify-between">
        <a href="/">
          <Image
            className=" m-8"
            src={'/logo.png'}
            width={188}
            height={68}
            alt="Logo da escola do real"
          />
        </a>
        <div className=" flex gap-4">
          <button className="rounded-md bg-blue-500 px-5 py-3 uppercase text-white hover:bg-blue-700">
            Fazer Doação
          </button>
          <button className="rounded-md bg-green-500 px-5 py-3 uppercase text-white hover:bg-green-600">
            Faça Parte
          </button>
        </div>
      </div>
    </header>
  )
}

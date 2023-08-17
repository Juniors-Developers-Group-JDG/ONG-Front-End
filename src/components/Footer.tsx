import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-green-500 to-blue-500 pb-7 pt-16">
      <div className="flex justify-center gap-4">
        <Image
          width={29}
          height={29}
          src="/icons/instagram.svg"
          alt="logo do Instagram"
        />
        <Image
          width={29}
          height={29}
          src="/icons/linkedin.svg"
          alt="logo do Linkedin"
        />
        <Image
          width={29}
          height={29}
          src="/icons/facebook.svg"
          alt="logo do Facebook"
        />
      </div>
      <small className="flex justify-center text-base leading-10 text-white">
        &copy; 2023 - Escola do Real - Todos os direitos reservados
      </small>
      <span className="flex justify-center text-xs text-white ">
        <span className="mr-1 ">Desenvolvido por </span>
        <a
          className="underline"
          rel="external"
          target="_blank"
          href="https://www.linkedin.com/company/juniors-developers-group/mycompany/"
        >
          Juniors Developers Group.
        </a>
        {/* <Image src="#" alt="Logo Juniors Developers Group." height={29} width={29} /> */}
      </span>
    </footer>
  )
}

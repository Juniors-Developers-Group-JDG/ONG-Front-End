import ButtonCTA from './ButtonCTA'
import SectionTitle from './SectionTitle'

export default function FaleConosco() {
  return (
    <section id="fale-conosco" className="my-20">
      <SectionTitle icon="/icons/talk.svg">Fale Conosco</SectionTitle>
      <h3 className="bg-talk-backgroud h-60 w-full bg-cover bg-center py-16 text-center text-2xl font-bold text-white md:text-3xl">
        Se você tem alguma dúvida ou precisa de informações específicas, fique à
        vontade para perguntar.
      </h3>
      <form className="relative mx-auto -mt-20 grid w-3/5 grid-cols-2 gap-4 rounded-lg bg-white p-6 shadow-lg">
        <label className="flex flex-col gap-2" htmlFor="name">
          Nome
          <input
            className="rounded-sm bg-slate-100 p-2"
            type="text"
            id="name"
            required
          />
        </label>

        <label className="flex flex-col gap-2" htmlFor="email">
          E-mail{' '}
          <input
            className="rounded-sm bg-slate-100 p-2"
            type="email"
            id="email"
            required
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2" htmlFor="subject">
          Tema
          <input
            className="rounded-sm bg-slate-100 p-2"
            id="subject"
            type="text"
            required
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2" htmlFor="message">
          Mensagem
          <textarea
            className="rounded-sm bg-slate-100"
            name="message"
            id="message"
            cols={30}
            rows={10}
            required
          ></textarea>
        </label>
        <div className="col-span-2 my-3">
          <ButtonCTA>Enviar Mensagem!</ButtonCTA>
        </div>
      </form>
    </section>
  )
}

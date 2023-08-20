import SectionCard from './SectionCard'
import SectionTitle from './SectionTitle'

const data = [
  {
    src: '/icons/globe.svg',
    alt: 'globe icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/hands.svg',
    alt: 'hands icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/location.svg',
    alt: 'location icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/talk.svg',
    alt: 'talk icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
]

export default function SectionLocation() {
  return (
    <section className="mt-10 ">
      <SectionTitle icon="/icons/location.svg">Onde Atuamos</SectionTitle>
      <h3 className="bg-people-backgroud h-60 w-full bg-cover bg-center py-16 text-center text-3xl font-bold text-white md:text-4xl">
        Capacitação de Pessoas para um Futuro <br /> Financeiramente
        Sustentável!
      </h3>
      <section className="custom-mx-global  -mt-12 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item) => (
          <SectionCard key={item.src} item={item} />
        ))}
      </section>
    </section>
  )
}

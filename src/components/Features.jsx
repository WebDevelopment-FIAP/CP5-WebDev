import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMagnifyingGlass, faUtensils } from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    number: '01',
    icon: faMagnifyingGlass,
    title: 'Busca de pratos',
    text: 'Pesquise receitas e descubra novas opções de comida.',
  },
  {
    number: '02',
    icon: faFilter,
    title: 'Filtros',
    text: 'Refine a busca para encontrar o tipo de comida desejado.',
  },
  {
    number: '03',
    icon: faUtensils,
    title: 'Detalhes da receita',
    text: 'Consulte informações do prato antes de fazer sua escolha.',
  },
]

function Features() {
  return (
    <section id="funcionalidades" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-100">Funcionalidades</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Encontre o que deseja comer</h2>
        </div>

        <div className="mt-12 divide-y divide-white/15 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {features.map((feature) => (
            <article key={feature.number} className="py-8 first:pt-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
              <div className="flex items-center justify-between">
                <FontAwesomeIcon className="text-2xl text-brand-500" icon={feature.icon} aria-hidden="true" />
                <span className="text-sm font-bold text-stone-500">{feature.number}</span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-stone-300">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

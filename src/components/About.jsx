import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCreditCard, faStore } from '@fortawesome/free-solid-svg-icons'

const benefits = [
  {
    icon: faBolt,
    title: 'Entrega rápida',
    text: 'Acompanhe o preparo e receba atualizações do pedido até a entrega.',
  },
  {
    icon: faStore,
    title: 'Mais variedade',
    text: 'Explore restaurantes e encontre opções para diferentes momentos do dia.',
  },
  {
    icon: faCreditCard,
    title: 'Pagamento fácil',
    text: 'Escolha a forma de pagamento que funciona melhor para o seu pedido.',
  },
]

function About() {
  return (
    <section id="beneficios" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Por que usar o GourmetOn</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Seu delivery em poucos passos</h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            O GourmetOn reúne restaurantes e facilita cada etapa, da escolha do prato ao pagamento.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="border-t-2 border-brand-500 pt-6">
              <FontAwesomeIcon className="text-3xl text-brand-600" icon={benefit.icon} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-extrabold text-ink">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

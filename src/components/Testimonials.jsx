const testimonials = [
  {
    quote: 'Encontrei novas opções para o almoço e consegui escolher tudo com facilidade.',
    name: 'Marina Alves',
  },
  {
    quote: 'A busca é simples e os filtros ajudam quando quero decidir o que pedir rapidamente.',
    name: 'Rafael Costa',
  },
  {
    quote: 'Gostei da variedade de pratos e da praticidade para acompanhar o pedido.',
    name: 'Camila Rocha',
  },
]

function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Quem pede pelo GourmetOn recomenda</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl bg-white p-7 shadow-[0_16px_45px_rgba(41,28,20,0.08)]">
              <blockquote className="text-lg leading-8 text-stone-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 font-extrabold text-ink">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[720px] items-center bg-cover bg-center pt-24"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(28, 18, 13, 0.95) 0%, rgba(28, 18, 13, 0.76) 46%, rgba(28, 18, 13, 0.24) 100%), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=85')",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-100">Delivery simples e rápido</p>
          <h1 className="text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Seu prato favorito mais perto de você
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-200 sm:text-xl">
            Encontre restaurantes, escolha o que deseja comer e acompanhe seu pedido pelo GourmetOn.
          </p>
          <a
            className="mt-9 inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-950/25 transition hover:bg-brand-600"
            href="#contato"
          >
            Baixar o app
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

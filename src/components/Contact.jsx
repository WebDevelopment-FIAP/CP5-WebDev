import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="contato" className="bg-brand-500 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-950">Contato</p>
          <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Receba novidades do GourmetOn
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-orange-950">
            Cadastre seu e-mail para acompanhar novidades e atualizações do aplicativo.
          </p>
        </div>

        <form className="rounded-2xl bg-white p-6 shadow-xl" onSubmit={handleSubmit}>
          <label className="block font-bold text-ink" htmlFor="email">E-mail</label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="email"
              className="min-w-0 flex-1 rounded-xl border border-stone-300 px-4 py-3 text-stone-900 placeholder:text-stone-400"
              type="email"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setSubmitted(false)
              }}
              required
            />
            <button className="rounded-xl bg-ink px-5 py-3 font-bold text-white transition hover:bg-stone-700" type="submit">
              Cadastrar
            </button>
          </div>
          <p className="mt-3 min-h-6 text-sm font-semibold text-green-700" aria-live="polite">
            {submitted ? 'E-mail cadastrado com sucesso.' : ''}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact

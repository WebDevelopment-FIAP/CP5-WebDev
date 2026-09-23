import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-stone-950/95 shadow-lg backdrop-blur'
          : 'bg-stone-950/65 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegação principal">
        <a className="flex items-center gap-2 text-xl font-black tracking-tight text-white" href="#inicio">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
            <FontAwesomeIcon icon={faUtensils} aria-hidden="true" />
          </span>
          GourmetOn
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-xl text-white md:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        <ul
          id="menu-principal"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-5 right-5 top-[4.75rem] flex-col gap-1 rounded-2xl bg-stone-950 p-3 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-stone-100 transition hover:bg-white/10 hover:text-brand-100 md:px-0"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

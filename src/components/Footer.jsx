import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="bg-stone-950 py-10 text-stone-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <a className="inline-flex items-center gap-2 text-lg font-black text-white" href="#inicio">
            <FontAwesomeIcon className="text-brand-500" icon={faUtensils} aria-hidden="true" />
            GourmetOn
          </a>
          <a className="mt-3 flex items-center gap-2 text-sm hover:text-white" href="mailto:contato@gourmeton.com.br">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            contato@gourmeton.com.br
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <a className="hover:text-white" href="#termos">Termos de uso</a>
          <a className="text-xl hover:text-white" href="https://www.instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-xl hover:text-white" href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

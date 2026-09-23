import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons'

function RecipeCard({ recipe }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white text-ink shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
      <img
        className="h-52 w-full object-cover"
        src={recipe.image}
        alt={recipe.title}
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-extrabold leading-snug">{recipe.title}</h3>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-stone-600">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon className="text-brand-600" icon={faClock} aria-hidden="true" />
            {recipe.readyInMinutes} min
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon className="text-brand-600" icon={faUtensils} aria-hidden="true" />
            {recipe.servings} porções
          </span>
        </div>
        {recipe.sourceUrl && (
          <a
            className="mt-6 inline-flex font-bold text-brand-700 underline decoration-2 underline-offset-4 hover:text-brand-600"
            href={recipe.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver receita
          </a>
        )}
      </div>
    </article>
  )
}

export default RecipeCard

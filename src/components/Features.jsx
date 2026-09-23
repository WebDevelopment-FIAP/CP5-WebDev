import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from './RecipeCard.jsx'
import { searchRecipes } from '../services/spoonacular.js'

const diets = [
  { value: '', label: 'Todas as opções' },
  { value: 'vegetarian', label: 'Vegetariana' },
  { value: 'vegan', label: 'Vegana' },
  { value: 'gluten free', label: 'Sem glúten' },
]

function Features() {
  const [query, setQuery] = useState('pizza')
  const [diet, setDiet] = useState('')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadRecipes(searchQuery, selectedDiet, signal) {
    setLoading(true)
    setError('')

    try {
      const results = await searchRecipes({
        query: searchQuery.trim(),
        diet: selectedDiet,
        signal,
      })
      setRecipes(results)
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setRecipes([])
        setError(requestError.message)
      }
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    loadRecipes('pizza', '', controller.signal)

    return () => controller.abort()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    loadRecipes(query, diet)
  }

  return (
    <section id="funcionalidades" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-100">Funcionalidades</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Encontre o que deseja comer</h2>
          <p className="mt-4 text-lg leading-8 text-stone-300">
            Busque pratos e use o filtro para encontrar receitas que combinam com você.
          </p>
        </div>

        <form className="mt-10 grid gap-4 rounded-2xl bg-white/10 p-5 md:grid-cols-[1fr_14rem_auto]" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-bold" htmlFor="recipe-query">Prato</label>
            <input
              id="recipe-query"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400"
              type="search"
              placeholder="Ex.: pasta, burger ou salad"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold" htmlFor="recipe-diet">Filtro</label>
            <select
              id="recipe-diet"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-stone-900"
              value={diet}
              onChange={(event) => setDiet(event.target.value)}
            >
              {diets.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <button
            className="self-end rounded-xl bg-brand-500 px-6 py-3 font-bold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} aria-hidden="true" />
            Buscar
          </button>
        </form>

        <div className="mt-10" aria-live="polite">
          {loading && (
            <p className="text-center text-lg font-semibold text-stone-300">Buscando receitas...</p>
          )}

          {!loading && error && (
            <p className="rounded-xl border border-red-300/30 bg-red-950/40 p-5 text-center font-semibold text-red-100">
              {error}
            </p>
          )}

          {!loading && !error && recipes.length === 0 && (
            <p className="text-center text-lg font-semibold text-stone-300">
              Nenhuma receita encontrada. Tente outra busca.
            </p>
          )}

          {!loading && !error && recipes.length > 0 && (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Features

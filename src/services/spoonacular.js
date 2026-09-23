const API_URL = 'https://api.spoonacular.com/recipes/complexSearch'

export async function searchRecipes({ query, diet, signal }) {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

  if (!apiKey) {
    throw new Error('Chave da Spoonacular não configurada.')
  }

  const params = new URLSearchParams({
    query,
    number: '6',
    addRecipeInformation: 'true',
  })

  if (diet) {
    params.set('diet', diet)
  }

  const response = await fetch(`${API_URL}?${params.toString()}`, {
    headers: {
      'x-api-key': apiKey,
    },
    signal,
  })

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('A chave da Spoonacular é inválida.')
    }

    if (response.status === 402) {
      throw new Error('A cota diária da Spoonacular foi atingida.')
    }

    if (response.status === 429) {
      throw new Error('Muitas buscas em pouco tempo. Tente novamente em instantes.')
    }

    throw new Error('Não foi possível buscar as receitas.')
  }

  const data = await response.json()
  return data.results ?? []
}

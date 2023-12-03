export async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados')
    }
    const posts = await response.json()
    return posts.data
  } catch (error) {
    console.error('Ocorreu um erro:', error)
    return []
  }
}

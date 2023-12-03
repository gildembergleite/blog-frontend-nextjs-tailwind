export async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados')
    }
    const res = await response.json()
    console.log(res)
    return res.data
  } catch (error) {
    console.error('Ocorreu um erro:', error)
    return []
  }
}

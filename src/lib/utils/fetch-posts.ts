import { Post } from '@/@types/post'

export async function fetchPosts(): Promise<Array<Post>> {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_JSON_SERVER_URL)
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados')
    }
    const posts = await response.json()
    return posts
  } catch (error) {
    console.error('Ocorreu um erro:', error)
    return []
  }
}

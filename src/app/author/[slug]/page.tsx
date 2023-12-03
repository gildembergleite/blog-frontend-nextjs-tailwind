import { Author } from '@/@types/author'
import { fetchData } from '@/lib/utils/fetch-data'
import AuthorPageClient from './page.client'

interface PostsByAuthorPageProps {
  params: {
    slug: string
  }
}

export default async function AuthorPage({ params }: PostsByAuthorPageProps) {
  const data = await fetchData(`http://localhost:1337/api/authors/name/${params.slug}`)
  const author: Author = data[0]
  
  return (
    <AuthorPageClient {...author} />
  )
}

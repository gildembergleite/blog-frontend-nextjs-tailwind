import { Author } from '@/@types/author'
import { fetchData } from '@/lib/utils/fetch-data'
import AuthorPageClient from './page.client'

interface AuthorPageProps {
  params: {
    slug: string
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}/authors/name/${params.slug}`
  )
  
  const author: Author = data[0]
  
  return (
    <AuthorPageClient {...author} />
  )
}

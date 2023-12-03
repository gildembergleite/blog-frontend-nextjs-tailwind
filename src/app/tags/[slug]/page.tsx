import { fetchData } from '@/lib/utils/fetch-data'
import TagPageClient from './page.client'

interface TagPageProps {
  params: {
    slug: string
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}/tags/name/${params.slug}/?populate=*`
  )
  
  return (
    <TagPageClient {...data} />
  )
   
}
import { fetchData } from '@/lib/utils/fetch-data'
import PostDetailsPageClient from './page.client'

interface PostDetailsPage {
  params: {
    slug: string
  }
}

export default async function PostDetailsPage({ params }: PostDetailsPage) {
  const response = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/name/${params.slug}?populate=*`
  )
  const post = response[0]

  return (
    <PostDetailsPageClient {...post} />
  )
}
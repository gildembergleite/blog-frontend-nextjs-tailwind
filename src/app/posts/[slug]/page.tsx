import { fetchData } from '@/lib/utils/fetch-data'
import PostsByAuthorPageClient from './page.client'

interface PostsByAuthorPageProps {
  params: {
    slug: string
  }
}

export default async function PostsByAuthorPage({ params }: PostsByAuthorPageProps) {
  const data = await fetchData(`
    ${process.env.NEXT_PUBLIC_API_URL}/posts/author/${params.slug}/?populate=*
  `)
  console.log(data)
  return (
    <PostsByAuthorPageClient populatePosts={data} />
  )
}
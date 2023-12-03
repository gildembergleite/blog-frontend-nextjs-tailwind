import { fetchData } from '@/lib/utils/fetch-data'
import PostsByAuthorPageClient from './page.client'

interface PostsByAuthorPageProps {
  params: {
    slug: string
  }
}

export default async function PostsByAuthorPage({ params }: PostsByAuthorPageProps) {
  const posts = await fetchData(`
    ${process.env.NEXT_PUBLIC_API_URL}/posts/author/${params.slug}
  `)
  
  const author = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}/authors/name/${params.slug}`
  )

  const tags = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}/tags/name/${params.slug}`
  )

  console.log(posts)
  return (
    <PostsByAuthorPageClient posts={posts} author={author[0]} />
  )
}
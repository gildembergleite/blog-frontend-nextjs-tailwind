import PostCard from '@/components/PostCard'
import { fetchData } from '@/lib/utils/fetch-data'
import { ResponseData } from '@/@types/response-data'
import MainTitle from '@/components/MainTitle'

export default async function Home() {
  const response = await fetchData(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/?populate=*`
  )
  const posts: ResponseData[] = response.data
  console.log(posts[0].attributes.tags.data)
  return (
    <main className='flex flex-col w-full justify-center items-center'>
      <MainTitle title='All posts' />
      <div className='md:px-12 px-6 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <PostCard key={post.id}
            cover={post.attributes.cover_url}
            author={post.attributes.author.data.attributes}
            date={new Date(post.attributes.date)}
            title={post.attributes.title}
            description={post.attributes.content}
            tags={post.attributes.tags.data.map((tag) => tag.attributes.name)}
          />
        ))}
      </div>
    </main>
  )
}

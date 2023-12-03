import PostCard from '@/components/PostCard'
import { fetchData } from '@/lib/utils/fetch-data'
import { Post } from '@/@types/post'

export default async function Home() {
  const posts: Post[] = await fetchData('http://localhost:1337/api/posts/?populate=*')
  
  return (
    <main className='flex flex-col w-full justify-center items-center'>
      <div className='w-full max-w-7xl px-12 pt-6'>
        <h2 className='font-semibold text-2xl'>
          All posts
        </h2>
      </div>
      <div className='px-12 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-3 gap-6'>
        {posts.map((post) => (
          <PostCard key={post.id}
            cover={post.attributes.cover_url}
            author={post.attributes.author.data.attributes}
            date={new Date(post.attributes.date)}
            title={post.attributes.title}
            description={post.attributes.content}
            tags={post.attributes.tags.data}
          />
        ))}
      </div>
    </main>
  )
}

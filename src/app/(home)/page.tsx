import PostCard from '@/components/PostCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { fetchPosts } from '@/lib/utils/fetch-posts'

export default async function Home() {
  const mock = await fetchPosts()
  console.log(mock)
  
  return (
    <>
      <Header />
      <main className='flex flex-col w-full justify-center items-center'>
        <div className='px-12 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-3 gap-6'>
          {mock.map((post) => (
            <PostCard key={post.id}
              cover={post.cover}
              author={post.author}
              date={new Date(post.createAt)}
              title={post.title}
              description={post.description}
              tags={post.tags}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

import PostCard from '@/components/PostCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { mockPosts } from '@/lib/utils/mock'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col w-full justify-center items-center'>
        <div className='px-12 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-3 gap-6'>
          {mockPosts.map((post) => (
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

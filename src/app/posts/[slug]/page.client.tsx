import { Author } from '@/@types/author'
import { Post } from '@/@types/post'
import PostCard from '@/components/PostCard'

interface PostsByAuthorPageClientProps {
  posts: Post[]
  author: Author
}

export default function PostsByAuthorPageClient({
  posts, author
}: PostsByAuthorPageClientProps) {

  return (
    <div className='px-12 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-3 gap-6'>
      {/* {posts.map((post) => (
        <PostCard key={post.id}
          cover={post.cover_url}
          author={author}
          date={new Date(post.date)}
          title={post.title}
          description={post.content}
          tags={post.tags.data}
        />
      ))} */}
    </div>
  )
}
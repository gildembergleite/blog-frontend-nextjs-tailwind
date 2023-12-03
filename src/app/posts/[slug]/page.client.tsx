'use client'

import { PopulatePost } from '@/@types/populate-post'
import PostCard from '@/components/PostCard'

interface PostsByAuthorPageClientProps {
  populatePosts: PopulatePost[]
}

export default function PostsByAuthorPageClient({ populatePosts }: PostsByAuthorPageClientProps) {
  console.log(populatePosts)
  return (
    <div className='px-12 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-3 gap-6'>
      {populatePosts.map((post) => (
        <PostCard key={post.id}
          cover={post.cover_url}
          author={post.author}
          date={new Date(post.date)}
          title={post.title}
          description={post.content}
          tags={post.tags.map((tag) => tag.name)}
        />
      ))}
    </div>
  )
}
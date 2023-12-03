'use client'

import { PopulatePost } from '@/@types/populate-post'
import { Tag } from '@/@types/tag'
import MainTitle from '@/components/MainTitle'
import PostCard from '@/components/PostCard'

interface TagPageRespone extends Tag {
  posts: PopulatePost[]
}

export default function TagPageClient(data: TagPageRespone[]) {
  const populatePosts = data[0].posts
  
  return (
    <main>
      <MainTitle title={`All posts by: ${data[0].name}`} />
      <div className='md:px-12 px-6 py-6 w-full justify-center items-center max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
    </main>
  )
}
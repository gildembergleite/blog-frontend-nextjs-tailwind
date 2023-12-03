import { PopulatePost } from '@/@types/populate-post'
import PostCard from '@/components/PostCard'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils/format-date'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'

export default function PostDetailsPageClient(post: PopulatePost) {
  return (
    <div className='flex w-full max-w-7xl py-6 px-12 gap-12'>
      <aside className='w-full max-w-xs space-y-6'>
        <h3 className='text-xl font-bold'>
          Recents blog posts
        </h3>
        <div>
          <PostCard
            cover={post.cover_url}
            title={post.title}
            date={new Date(post.date)}
            author={post.author}
            description={post.content}
            tags={post.tags.map((tag) => tag.name)}
          />
        </div>
        <div>
          <PostCard
            cover={post.cover_url}
            title={post.title}
            date={new Date(post.date)}
            author={post.author}
            description={post.content}
            tags={post.tags.map((tag) => tag.name)}
          />
        </div>
      </aside>
      <main className='w-full'>
        <div>
          <p className='text-sm text-primary/60'>
            {formatDate(new Date(post.date))}
          </p>
          <h2 className='text-4xl font-bold py-6'>
            {post.title}
          </h2>
          <div>
            <Image
              className='w-full'
              width={0}
              height={0}
              sizes='100vw'
              src={post.cover_url}
              alt=''
            />
            <p className='py-6'>{post.content}</p>
            <div className='flex gap-2 flex-wrap'>
              {post.tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${slugify(tag.name, { strict: true, lower: true })}`}>
                  <Badge className='inline-block'>
                    {tag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
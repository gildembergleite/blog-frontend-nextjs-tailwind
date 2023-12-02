import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { formatDate } from '@/lib/utils/format-date'

interface PostCardProps {
  cover: string
  author: string
  date: Date
  title: string
  description: string
  tags: string[]
}

export default function PostCard(props: PostCardProps) {
  const { cover, author, date, title, description, tags } = props
  
  return (
    <Card className='h-full rounded-none'>
      <CardHeader>
        <Link href="#" className='w-full h-full max-h-40 max-w-sm overflow-hidden'>
          <Image
            className='w-full h-full'
            width={0}
            height={0}
            sizes='100vw'
            src={cover}
            alt=''
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className='flex gap-2 items-center text-primary/60 text-sm'>
          <Link href="#" className='hover:underline'>
            {author}
          </Link>
          <div className='rounded-full h-1.5 w-1.5 bg-primary/60'></div>
          <p>{formatDate(date)}</p>
        </div>
        <CardTitle className='py-3'>
          <Link href="#">{title}</Link>
        </CardTitle>
        <CardDescription>
          {description.slice(0, 120) + '...'}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex gap-2 flex-wrap'>
        {tags.map((tag) => (
          <Link key={tag} href="#">
            <Badge className='inline-block'>
              {tag}
            </Badge>
          </Link>
        ))}
      </CardFooter>
    </Card>
  )
}
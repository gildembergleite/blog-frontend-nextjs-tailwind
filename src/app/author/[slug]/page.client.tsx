import { Author } from '@/@types/author'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils/format-date'
import Link from 'next/link'

export default function AuthorPageClient(author: Author) {
  return (
    <div className='w-full max-w-7xl px-12 py-6'>
      <Card>
        <CardHeader>
          <CardTitle>{author.name}</CardTitle>
          <CardDescription>
            Author since: {' '}
            {formatDate(new Date(author.createdAt))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          alias ab quos adipisci culpa fuga optio labore aperiam dolor
          tempora necessitatibus ducimus, nihil recusandae repellat? Ratione
          illum velit voluptas officia!
        </CardContent>
        <CardFooter>
          <Link href={`/posts/${author.slug}`}>
            <Button>
              Click to see all posts by the author
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
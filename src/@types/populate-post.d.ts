import { Author } from './author'
import { Post } from './post'
import { Tag } from './tag'

export interface PopulatePost extends Post {
  author: Author
  tags: Tag[]
}
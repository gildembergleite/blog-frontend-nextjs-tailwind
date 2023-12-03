import { Post } from './post'
import { Author } from './author'
import { Tag } from './tag'

interface ResponseAttributes extends Post {
  author: {
    data: {
      id: number;
      attributes: Author
    }
  }
  tags: {
    data: Tag[]
  }
}

export interface ResponseData {
  id: number
  attributes: ResponseAttributes
}
import { Post } from './post'
import { Author } from './author'
import { Tag } from './tag'

export interface TagData {
  id: number;
  attributes: Tag
}

export interface ResponseAttributes extends Post {
  author: {
    data: {
      id: number;
      attributes: Author
    }
  }
  tags: {
    data: TagData[]
  }
}

export interface ResponseData {
  id: number
  attributes: ResponseAttributes
}
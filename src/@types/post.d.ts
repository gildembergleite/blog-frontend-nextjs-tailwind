import { Author } from './author'
import { Tag } from './tag'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Post {
  id: number
  attributes: {
    title: string
    slug: string
    date: string
    createdAt: string
    updatedAt: string
    cover_url: string
    content: string
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
}
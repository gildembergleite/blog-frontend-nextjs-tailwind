'use client'


import { fetchData } from '@/lib/utils/fetch-data'
import { useEffect } from 'react'

interface PostsByAuthorPageProps {
  params: {
    slug: string
  }
}

export default function AuthorPage({ params }: PostsByAuthorPageProps) {


  useEffect(() => {
    getAuthorData()
  }, [])
  
  async function getAuthorData() {
    const author = await fetchData('http://localhost:1337/api/authors/name/codewizard22')
    return author
  }
  
  return (
    <div>      
      {params.slug}
    </div>
  )
}

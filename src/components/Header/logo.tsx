'use client'

import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Separator className='bg-input w-full h-0.5' />
      <Link href="/">
        <h1 className="font-bold text-[12rem] inline-block leading-none">
          THE BLOG
        </h1>
      </Link>
      <Separator className='bg-input w-full h-0.5' />
    </>
  )
}
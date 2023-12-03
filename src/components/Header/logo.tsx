'use client'

import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Separator className='bg-input w-full h-0.5' />
      <Link href="/">
        <h1 className="font-bold text-[14vw] xl:text-[10vw] inline-block leading-none py-4 md:py-0">
          THE BLOG
        </h1>
      </Link>
      <Separator className='bg-input w-full h-0.5' />
    </>
  )
}
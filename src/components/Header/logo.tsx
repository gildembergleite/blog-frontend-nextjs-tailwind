'use client'

import { Separator } from '@radix-ui/react-separator'

export default function Logo() {
  return (
    <>
      <Separator className='bg-input w-full h-0.5' />
      <h1 className="font-bold text-[12rem] inline-block leading-none">
          THE BLOG
      </h1>
      <Separator className='bg-input w-full h-0.5' />
    </>
  )
}
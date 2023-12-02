'use client'

import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full max-w-7xl justify-center items-center px-12">
        <nav className='flex w-full justify-end items-center py-6'>
          <ul className='flex gap-6'>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </nav>
        <Separator className='bg-input w-full h-0.5' />
        <h1 className="font-bold text-[12rem] inline-block leading-none">
          THE BLOG
        </h1>
        <Separator className='bg-input w-full h-0.5' />
      </div>
    </header>
  )
}
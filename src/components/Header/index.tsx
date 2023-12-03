import Link from 'next/link'
import Logo from './logo'

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
        <Logo />
      </div>
    </header>
  )
}
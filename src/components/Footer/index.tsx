import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full max-w-7xl justify-center items-center px-12 py-6">
        <p>
          Make with ❤️ by {' '}
          <Link className='hover:underline' target='_blank' href="https://www.gildembergleite.com.br/">
            Gildemberg Leite
          </Link>.
          The source code is available on {' '}
          <Link className='hover:underline' target='_blank' href="#">
            GitHub
          </Link>.
        </p>
      </div>
    </footer>
  )
}
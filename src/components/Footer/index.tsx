import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full max-w-7xl justify-center items-center px-12 py-6">
        <p className='text-center leading-relaxed'>
            Back-end code on {' '}
          <Link className='hover:underline' target='_blank' href="https://github.com/gildembergleite/blog-backend-strapi">
            GitHub
          </Link>. <br />
            Front-end code on {' '}
          <Link className='hover:underline' target='_blank' href="https://github.com/gildembergleite/blog-frontend-nextjs-tailwind">
            GitHub
          </Link>. <br />
            Make with ❤️ by {' '}
          <Link className='hover:underline' target='_blank' href="https://www.gildembergleite.com.br/">
            Gildemberg Leite
          </Link>. <br />
        </p>
      </div>
    </footer>
  )
}
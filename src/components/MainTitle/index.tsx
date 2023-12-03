export default function MainTitle({ title }: { title: string }) {
  return (
    <div className='w-full max-w-7xl px-12 pt-6'>
      <h2 className='font-semibold text-2xl'>
        {title}
      </h2>
    </div>
  )
}
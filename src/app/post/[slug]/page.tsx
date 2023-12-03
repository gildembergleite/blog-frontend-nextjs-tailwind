interface PostDeatilsPage {
  params: {
    slug: string
  }
}

export default function PostDetailsPage({ params }: PostDeatilsPage) {

  return (
    <div>
      {params.slug}
    </div>
  )
}
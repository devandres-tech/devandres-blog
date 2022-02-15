import { useRouter } from 'next/router'
import { IAllPostData } from '../../pages'
import Link from 'next/link'

export default function Pagination({
  allPostsData,
}: {
  allPostsData: IAllPostData
}) {
  const router = useRouter()
  const currentSlug = router.asPath.split('/')[2]
  const currentIdx = allPostsData.findIndex((post) => post.slug === currentSlug)

  const nextPost = allPostsData[currentIdx + 1]
  const prevPost = allPostsData[currentIdx - 1]

  return (
    <div>
      {prevPost && (
        <Link href={`/posts/${prevPost.slug}`}>{prevPost.title}</Link>
      )}
      {nextPost && (
        <Link href={`/posts/${nextPost.slug}`}>{nextPost.title}</Link>
      )}
    </div>
  )
}

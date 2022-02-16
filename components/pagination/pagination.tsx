import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './pagination.module.scss'
import { IAllPostData } from '../../pages'

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
    <div className={styles.container}>
      <div>
        {prevPost && (
          <Link href={`/posts/${prevPost.slug}`} passHref>
            <div className={styles.postBtn}>
              <i
                className='fa-solid fa-angle-left'
                style={{ paddingRight: '0.5rem' }}
              />
              <a>{prevPost.title}</a>
            </div>
          </Link>
        )}
      </div>
      <div>
        {nextPost && (
          <Link href={`/posts/${nextPost.slug}`} passHref>
            <div className={styles.postBtn}>
              <a>{nextPost.title}</a>
              <i
                className='fa-solid fa-angle-right'
                style={{ paddingLeft: '0.5rem' }}
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

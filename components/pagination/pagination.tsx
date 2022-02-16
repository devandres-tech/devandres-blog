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
              <p style={{ padding: 0, margin: 0 }}>Previous</p>
              <div>
                <i
                  className='fa-solid fa-angles-left'
                  style={{ paddingRight: '0.3rem' }}
                />
                <a>{prevPost.title}</a>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div>
        {nextPost && (
          <Link href={`/posts/${nextPost.slug}`} passHref>
            <div className={styles.postBtn}>
              <p style={{ padding: 0, margin: 0, textAlign: 'right' }}>Next</p>
              <div style={{ textAlign: 'right' }}>
                <a>{nextPost.title}</a>
                <i
                  className='fa-solid fa-angles-right'
                  style={{ paddingLeft: '0.3rem' }}
                />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

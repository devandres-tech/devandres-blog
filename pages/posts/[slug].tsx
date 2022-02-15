import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/layout/layout'
import Date from '../../components/date'
import { getAllPostSlugs, getPostData, getSortedPostsData } from '../../lib/api'
import utilStyles from '../../styles/utils.module.scss'

interface IPost {
  postData: {
    date: string
    title: string
    contentHtml: string
  }
  allPostsData: Array<{
    title: string
    slug: string
  }>
}

export default function Post({ postData, allPostsData }: IPost) {
  const router = useRouter()
  const currentSlug = router.asPath.split('/')[2]
  const currentIdx = allPostsData.findIndex((post) => post.slug === currentSlug)

  const nextPost = allPostsData[currentIdx + 1]
  const prevPost = allPostsData[currentIdx - 1]

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      {prevPost && (
        <Link href={`/posts/${prevPost.slug}`}>{prevPost.title}</Link>
      )}
      {nextPost && (
        <Link href={`/posts/${nextPost.slug}`}>{nextPost.title}</Link>
      )}
    </Layout>
  )
}

// returns an array of possible values for [id]
export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

// fetches necessary data for the post with id
export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.slug)
  const allPostsData = getSortedPostsData().reverse()
  return {
    props: {
      allPostsData,
      postData,
    },
  }
}

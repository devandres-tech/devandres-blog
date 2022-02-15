import Head from 'next/head'

import Layout from '../../components/layout/layout'
import Date from '../../components/date'
import Pagination from '../../components/pagination/pagination'
import { getAllPostSlugs, getPostData, getSortedPostsData } from '../../lib/api'
import utilStyles from '../../styles/utils.module.scss'
import { IAllPostData, IPostData } from '../index'

export default function Post({
  postData,
  allPostsData,
}: {
  postData: IPostData
  allPostsData: IAllPostData
}) {
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
      <Pagination allPostsData={allPostsData} />
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

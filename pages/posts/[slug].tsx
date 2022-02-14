import Head from 'next/head'

import Layout from '../../components/layout/layout'
import Date from '../../components/date'
import { getAllPostSlugs, getPostData } from '../../lib/api'
import utilStyles from '../../styles/utils.module.scss'

interface IPost {
  postData: {
    date: string
    title: string
    contentHtml: string
  }
}

export default function Post({ postData }: IPost) {
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
  return {
    props: {
      postData,
    },
  }
}

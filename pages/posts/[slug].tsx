import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Layout from '../../components/layout/layout'
import Date from '../../components/date'
import CodeBlock from '../../components/codeblock'
import Pagination from '../../components/pagination/pagination'
import { getAllPostSlugs, getPostData, getSortedPostsData } from '../../lib/api'
import utilStyles from '../../styles/utils.module.scss'
import { IAllPostData, IPostData } from '../index'
import Taco from '../../components/taco'

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
        <meta charSet='UTF-8' />
        <meta name='description' content={postData.description} />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, React, Netflix Clone, React Native, React-Native, Dev Andres, Tech, SASS, TypeScript, Frontend Developer, Developer, Software Developer, Front-end, Nodejs, Next.js, Spotify Clone'
        />
        <meta name='author' content='Andres Alcocer' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div
          className={utilStyles.lightText}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Date dateString={postData.date} />
          <span style={{ marginLeft: '0.3rem', marginRight: '0.3rem' }}>
            &#8226;
          </span>
          <Taco length={postData.contentHtml.length} />
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className='markdown-content'
          components={CodeBlock}
        >
          {postData.markdown}
        </ReactMarkdown>
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

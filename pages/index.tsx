import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CopyToClipboard from 'react-copy-to-clipboard'

import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/api'
import Date from '../components/date'
import ProfileImg from '../public/profile-img.png'
import Taco from '../components/taco'

export interface IPostData {
  slug: string
  date: string
  title: string
  postLength: number
  contentHtml: string
}

export type IAllPostData = IPostData[]

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

const Home = ({ allPostsData }: { allPostsData: IAllPostData }) => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false)

  return (
    <Layout home>
      <Head>
        <title>Andres Alcocer | Blog</title>
        <meta
          name='description'
          content='Andres Alcocer Blog Dev Andres Frontend Front end Front-end developer React React Native Netflix-Clone Netflix Clone'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={utilStyles.homeContainer}>
        <section className={utilStyles.bioContainer}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'space-between',
            }}
          >
            <div className={utilStyles.profileImg__container}>
              <Image
                className={utilStyles.profileImg}
                src={ProfileImg}
                alt='head shot'
              />
            </div>
            <div
              style={{
                height: '0.7rem',
                padding: '0',
                margin: '0',
              }}
            >
              {emailCopied && (
                <span className={utilStyles.copiedEmailAlert}>
                  <b>Email copied to clipboard!</b>
                </span>
              )}
            </div>
            <div className={utilStyles.social}>
              <a href='https://github.com/devandres-tech'>
                <span className='fa-brands fa-github' />
              </a>
              <a href='https://www.linkedin.com/in/andres-io/'>
                <span className='fa-brands fa-linkedin-in' />
              </a>
              <a href='https://twitter.com/devandres_tech'>
                <span className='fa-brands fa-twitter' />
              </a>
              <CopyToClipboard
                text='devandres.tech@gmail.com'
                onCopy={() => {
                  setEmailCopied(true)
                  setTimeout(() => {
                    setEmailCopied(false)
                  }, 2000)
                }}
              >
                <span className='fa-solid fa-envelope'></span>
              </CopyToClipboard>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingBottom: '1rem',
            }}
          >
            <p className={utilStyles.bioText}>
              Hi, I am Andres Alcocer and I like everything involving the world
              of frontend development. When I am not coding or writing for my
              blog I like to try new grilling recipes and keep up with the
              latest football
              <span style={{ paddingLeft: '6px' }}>&#9917;</span> stats.
            </p>
          </div>
        </section>
        <section className={utilStyles.blogContainer}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ slug, date, title, postLength }) => (
              <li className={utilStyles.listItem} key={slug}>
                <Link href={`/posts/${slug}`}>
                  <a className={utilStyles.headingLgB}>{title}</a>
                </Link>
                <br />
                <small
                  style={{ display: 'flex', alignItems: 'center' }}
                  className={utilStyles.lightText}
                >
                  <Date dateString={date} />
                  <span style={{ marginLeft: '0.3rem', marginRight: '0.3rem' }}>
                    &#8226;
                  </span>
                  <Taco length={postLength} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Home

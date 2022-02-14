import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/api'
import Date from '../components/date'
import ProfileImg from '../public/profile-img.png'

interface IAllPostData {
  allPostsData: Array<{ slug: string; date: string; title: string }>
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Home = ({ allPostsData }: IAllPostData) => {
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
        <section className={utilStyles.blogContainer}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ slug, date, title }) => (
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
                  <span style={{ paddingLeft: '6px' }}>&#127790;</span>
                </small>
              </li>
            ))}
          </ul>
        </section>
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
            <h3 className={utilStyles.profileImg__title}>Dev Andres</h3>
            <div className={utilStyles.profileImg__container}>
              <Image
                className={utilStyles.profileImg}
                src={ProfileImg}
                alt='head shot'
              />
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
              <CopyToClipboard text='tuckerblackwell.dev@gmail.com'>
                <span className='fa-solid fa-envelope' />
              </CopyToClipboard>
            </div>
          </div>
          <div>
            <p>
              Hi, I am Andres Alcocer and I like everything involving the world
              of frontend development. When I am not coding or writing for my
              blog I like to try new grilling recipes and keep up with the
              latest football
              <span style={{ paddingLeft: '6px' }}>&#9917;</span> stats.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout/Layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/api'
import Date from '../components/Date'
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
            <div className={utilStyles.profileImg__container}>
              <Image
                className={utilStyles.profileImg}
                src={ProfileImg}
                alt='head shot'
              />
            </div>
            <div className={utilStyles.social}>
              <span className='fa-brands fa-github' />
              <span className='fa-brands fa-linkedin-in' />
              <span className='fa-brands fa-twitter' />
              <span className='fa-solid fa-envelope' />
            </div>
          </div>
          <div>
            <p>
              Hi, I am Andres Alcocer and I like everything involving the world
              of frontend development. When I am not coding or writing for my
              blog I like to try new grilling recipes and keep up with the
              latest football stats.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home

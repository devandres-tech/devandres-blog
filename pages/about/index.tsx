import Layout from '../../components/layout/layout'
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='Andres Alcocer blog. Frontend Developer who enjoys working with React.'
        />
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
      <article style={{ height: '60vh' }}>
        <h1>About</h1>
        <p>
          I am a software developer who is passionate about frontend
          development. I am mostly interested in the React ecosystem. My
          favorite technologies are: React, React Native, Node.js, Sass,
          TypeScript and Next.js. I built this blog to help me keep up with the
          latest technologies in this never ending journey.
        </p>
        <p style={{ textAlign: 'end', paddingTop: '2rem' }}>- Andres Alcocer</p>
      </article>
    </Layout>
  )
}

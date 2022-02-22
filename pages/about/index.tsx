import Layout from '../../components/layout/layout'
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta
          name='description'
          content='Andres Alcocer Blog Dev Andres Frontend Front end Front-end developer React React Native Netflix-Clone Netflix Clone About about'
        />
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

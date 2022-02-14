import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

const name = 'Andres Alcocer'
export const siteTitle = 'Next.js Sample Website'

interface ILayout {
  children?: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home }: ILayout) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

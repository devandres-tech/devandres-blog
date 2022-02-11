import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../navbar/Navbar'
import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'

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
        {home && (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

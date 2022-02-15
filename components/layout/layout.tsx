import Link from 'next/link'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

interface ILayout {
  children?: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home }: ILayout) {
  return (
    <div
      style={{
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
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
    </div>
  )
}

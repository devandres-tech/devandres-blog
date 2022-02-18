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
      style={
        {
          // minHeight: '95vh',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
        }
      }
    >
      <Navbar />
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href='/' passHref>
              <div className={styles.homeBtn}>
                <a style={{ width: 'fit-content' }}>
                  ←{' '}
                  <i
                    className='fa-solid fa-house'
                    style={{ paddingRight: '0.5rem' }}
                  ></i>
                  Home
                </a>
              </div>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

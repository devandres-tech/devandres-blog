import Image from 'next/image'
import Link from 'next/link'

import ActiveLink from '../ActiveLink/ActiveLink'
import styles from './Navbar.module.scss'
import ProfileImg from '../../public/profile-img.png'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('../ThemeToggle'), {
  ssr: false,
})

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.container__innerWrapper}>
        <Link href='/' passHref>
          <div className={styles.imgContainer}>
            <span style={{ paddingRight: '0.5rem' }}>
              <Image
                className={styles.imgContainer__img}
                src={ProfileImg}
                height={35}
                width={35}
                alt='head shot'
              />
            </span>
            <p>Dev Andres</p>
          </div>
        </Link>
        <div className={styles.container__rightContent}>
          <ActiveLink href='/'>Home</ActiveLink>
          <ActiveLink href='/about'>About</ActiveLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

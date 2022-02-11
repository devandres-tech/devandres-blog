import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div>logo</div>
      <div className={styles.container__rightContent}>
        <Link href='/'>Blog</Link>
        <Link href='/about'>About</Link>
      </div>
    </nav>
  )
}

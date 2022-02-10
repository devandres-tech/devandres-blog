import Head from 'next/head'
import Image from 'next/image'
import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <div>Blog</div>
      </div>
    </nav>
  )
}

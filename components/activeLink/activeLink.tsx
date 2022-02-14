import { useRouter } from 'next/router'

import styles from './activeLink.module.scss'
import Link from 'next/link'

interface IActiveLink {
  children: React.ReactNode
  href: string
}

export default function ActiveLink({ children, href }: IActiveLink) {
  const router = useRouter()

  return (
    <Link passHref href={href}>
      <div className={styles.activeLinkContainer}>
        <a className={router.asPath === href ? styles.active : styles.default}>
          {children}
        </a>
      </div>
    </Link>
  )
}

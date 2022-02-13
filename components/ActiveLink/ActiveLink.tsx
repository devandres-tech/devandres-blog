import { useRouter } from 'next/router'

import styles from './ActiveLink.module.scss'
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
        <span
          className={router.asPath === href ? styles.active : styles.default}
        >
          {children}
        </span>
      </div>
    </Link>
  )
}

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p>
          <span>&#169;</span> 2022, built by Andres Alcocer and powered by{' '}
          <a className={styles.linkTag} href={'https://nextjs.org/'}>
            <b>Next.js</b>
          </a>
        </p>
        <p className={styles.sourceText}>
          <a
            className={styles.linkTag}
            href='https://github.com/devandres-tech/devandres-blog'
          >
            <b>Source code</b>
          </a>
        </p>
      </div>
    </footer>
  )
}

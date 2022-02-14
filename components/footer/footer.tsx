import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>
        <span>&#169;</span>2022, Built by Andres Alcocer and powered by{' '}
        <a>Next.Js</a>
      </p>
    </footer>
  )
}

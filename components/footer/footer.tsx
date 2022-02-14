import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p>2022, built by Andres Alcocer and powered by Next.js</p>
      </div>
    </footer>
  )
}

import Script from 'next/script'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src='https://kit.fontawesome.com/abc21028e3.js'
        crossOrigin='anonymous'
      />
    </>
  )
}

export default MyApp

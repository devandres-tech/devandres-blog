import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme') === "dark" || window.localStorage.getItem('theme') === "light") {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
      }
      document.body.dataset.theme = getUserPreference();
    `
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@300;400&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
          integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/brands.min.css'
          integrity='sha512-bSncow0ApIhONbz+pNI52n0trz5fMWbgteHsonaPk42JbunIeM9ee+zTYAUP1eLPky5wP0XZ7MSLAPxKkwnlzw=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

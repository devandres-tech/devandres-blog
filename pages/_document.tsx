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
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

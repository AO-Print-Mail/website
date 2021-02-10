import Head from 'next/head'
import { globalStyles } from '@theme'
import '../styles/font-face.css'

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width initial-scale=1, viewport-fit=cover"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

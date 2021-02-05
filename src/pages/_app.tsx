import Head from 'next/head'
import { globalStyles } from '@theme'
import '../styles/font-face.css'

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10102B" />
        <link
          rel="preload"
          href="/fonts/ao-rcltsmbld/ao-rcltsmb-alph.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

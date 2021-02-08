import Head from 'next/head'
import { globalStyles } from '@theme'
import '../styles/font-face.css'

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import Head from 'next/head'
import { globalStyles } from '@theme'
import '../styles/font-face.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'

createStore(store)

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <StateMachineProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width initial-scale=1, viewport-fit=cover"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </StateMachineProvider>
  )
}

export default MyApp

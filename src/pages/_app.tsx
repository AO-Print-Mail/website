import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'
import { LazyMotion, domMax } from 'framer-motion'
import { UserData } from '@lib/react'
import { globalStyles } from '@theme'
import { isBrowser } from '@utils'
import '../styles/font-face.css'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(JSON.stringify(metric, null, 2))
}
if (isBrowser()) {
  createStore(store, {
    storageType: window.localStorage,
    name: '__AOM__',
    middleWares: [],
  })
}

function MyApp({ Component, pageProps }: AppProps) {
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
      <UserData />
      <LazyMotion strict features={domMax}>
        <Component {...pageProps} />
      </LazyMotion>
    </StateMachineProvider>
  )
}

export default MyApp

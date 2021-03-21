import Head from 'next/head'
import { isBrowser } from '@utils'

import '../styles/font-face.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'
import { LazyMotion, domMax } from 'framer-motion'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { UserData } from '@lib/react'
import { globalStyles } from '@theme'
import dynamic from 'next/dynamic'

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

const Hubspot = dynamic(() => import('@lib/react/hubspot'))

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
      <Hubspot />
      <LazyMotion strict features={domMax}>
        <Component {...pageProps} />
      </LazyMotion>
    </StateMachineProvider>
  )
}

export default MyApp

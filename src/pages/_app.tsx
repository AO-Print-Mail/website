import Head from 'next/head'
import { isBrowser } from '@utils'

import '../styles/font-face.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'
import {
  useAnimationContext,
  AnimationFeaturesContext,
} from '@lib/react/animation-features'
import { MotionConfig } from 'framer-motion'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { UserData } from '@lib/react'
import { globalStyles } from '@theme'

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
  const { features, importFeatures } = useAnimationContext()
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
      <MotionConfig features={features}>
        <AnimationFeaturesContext.Provider value={importFeatures}>
          <Component {...pageProps} />
        </AnimationFeaturesContext.Provider>
      </MotionConfig>
    </StateMachineProvider>
  )
}

export default MyApp

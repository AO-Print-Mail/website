import { useState } from 'react'
import Head from 'next/head'
import { globalStyles } from '@theme'
import '../styles/font-face.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'
import {
  useAnimationContext,
  AnimationFeaturesContext,
} from '@lib/react/animation-features'
import { MotionConfig } from 'framer-motion'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(JSON.stringify(metric, null, 2))
}

createStore(store)

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
      <MotionConfig features={features}>
        <AnimationFeaturesContext.Provider value={importFeatures}>
          <Component {...pageProps} />
        </AnimationFeaturesContext.Provider>
      </MotionConfig>
    </StateMachineProvider>
  )
}

export default MyApp

import { useState } from 'react'
import Head from 'next/head'
import { globalStyles } from '@theme'
import '../styles/font-face.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'
import {
  useAnimationFeatures,
  AnimationFeaturesContext,
  featureLookup,
} from '@lib/react/animation-features'
import { MotionConfig, MotionFeature } from 'framer-motion'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(JSON.stringify(metric, null, 2))
}

createStore(store)

type animationStr = (keyof typeof featureLookup)[]

function MyApp({ Component, pageProps }: AppProps) {
  const [animationFeatures, setAnimationFeatures]: [
    animationStr,
    (reqs: animationStr) => void
  ] = useState([])

  const motionFeatures: MotionFeature[] = useAnimationFeatures(
    animationFeatures
  )

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
      <MotionConfig features={motionFeatures}>
        <AnimationFeaturesContext.Provider value={setAnimationFeatures}>
          <Component {...pageProps} />
        </AnimationFeaturesContext.Provider>
      </MotionConfig>
    </StateMachineProvider>
  )
}

export default MyApp

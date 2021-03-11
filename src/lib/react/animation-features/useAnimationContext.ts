import { createContext, useState } from 'react'
import type { MotionFeature } from 'framer-motion'

export const featureLookup = {
  drag: './dragFeature',
  exit: './exitFeature',
  animation: './animationFeature',
  animateLayout: './animateLayoutFeature',
  gestures: './gesturesFeature',
}

//FAILED ATTEMPT - TBC

/*
We are looking for a component to simply use
useAnimationFeature(['exit','drag'])
*/

export type animationStr = keyof typeof featureLookup
export type AnimationState = {
  [key in animationStr]?: MotionFeature
}
type contextType = (arg: animationStr[]) => void

export const AnimationFeaturesContext = createContext<contextType>(([]) => {})

export function useAnimationContext() {
  const [animationFeatures, setAnimationFeatures]: [
    AnimationState,
    (AnimationState) => void
  ] = useState({})

  const importFeatures = (reqs: animationStr[]) => {
    reqs.forEach(async (req) => {
      if (!animationFeatures[req]) {
        let feature: MotionFeature
        switch (req) {
          case 'drag':
            feature = (await import('./dragFeature')).default
            break
          case 'exit':
            feature = (await import('./exitFeature')).default
            break
          case 'animation':
            feature = (await import('./animationFeature')).default
            break
          case 'animateLayout':
            feature = (await import('./animateLayoutFeature')).default
            break
          case 'gestures':
            feature = (await import('./gesturesFeature')).default
            break
        }
        setAnimationFeatures({ ...animationFeatures, [req]: feature })
      }
    })
  }

  const features: MotionFeature[] = Object.values(animationFeatures)

  return { features, importFeatures }
}

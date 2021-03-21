import { createContext, useEffect, useState } from 'react'

export const featureLookup = {
  drag: './dragFeature',
  exit: './exitFeature',
  animation: './animationFeature',
  animateLayout: './animateLayoutFeature',
  gestures: './gesturesFeature',
}

//FAILED ATTEMPT - TBC

export type animationStr = keyof typeof featureLookup
export type AnimationState = {
  [key in animationStr]?: any
}
type contextType = (arg: animationStr[]) => void

export const AnimationFeaturesContext = createContext<contextType>(([]) => {})

export function useAnimationContext(defaultFeatures?: animationStr[]) {
  const [animationFeatures, setAnimationFeatures]: [
    AnimationState,
    (AnimationState) => void
  ] = useState({})

  const importFeatures = (reqs: animationStr[]) => {
    reqs.forEach(async (req) => {
      if (!animationFeatures[req]) {
        let feature: any
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

  useEffect(() => {
    if (defaultFeatures) {
      importFeatures(defaultFeatures)
    }
  }, [])

  const features: any[] = Object.values(animationFeatures)

  return { features, importFeatures }
}

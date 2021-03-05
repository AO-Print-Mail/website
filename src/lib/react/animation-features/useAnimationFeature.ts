import { useEffect, useState, createContext } from 'react'
import { MotionFeature } from 'framer-motion'
import dynamic from 'next/dynamic'

export const featureLookup = {
  drag: './dragFeature',
  exit: './exitFeature',
  animation: './animationFeature',
  animateLayout: './animateLayoutFeature',
  gestures: './gesturesFeature',
}

type contextType = (arg: (keyof typeof featureLookup)[]) => void

export const AnimationFeaturesContext = createContext<contextType>(([]) => {})

export const useAnimationFeatures = (
  featureReqs: (keyof typeof featureLookup)[]
): MotionFeature[] => {
  const [features, setFeatures] = useState({})

  const importFeatures = (reqs: (keyof typeof featureLookup)[]) => {
    reqs.forEach(async (req) => {
      let feature = {}
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
      setFeatures({ ...features, [req]: feature })
    })
  }

  useEffect(() => {
    importFeatures(featureReqs)
  }, [featureReqs])

  return Object.values(features)
}

//useAnimationFeatures(['exit'])

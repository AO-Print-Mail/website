import { useEffect, useState, createContext } from 'react'
import dynamic from 'next/dynamic'

export const featureLookup = {
  drag: './dragFeature',
  exit: './exitFeature',
  animation: './animationFeature',
  animateLayout: './animateLayoutFeature',
  gestures: './gesturesFeature',
}

export const useAnimationFeatures = (
  featureReqs: (keyof typeof featureLookup)[]
): any[] => {
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

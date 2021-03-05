import { createContext, useState } from 'react'
import { featureLookup, useAnimationFeatures } from './useAnimationFeature'
import { MotionFeature } from 'framer-motion'

//FAILED ATTEMPT - TBC

/*
We are looking for a component to simply use
useAnimationFeature(['exit','drag'])
*/

type animationStr = (keyof typeof featureLookup)[]
type contextType = (arg: animationStr) => void

export const AnimationFeaturesContext = createContext<contextType>(([]) => {})

export function useAnimationContext() {
  const [animationFeatures, setAnimationFeatures]: [
    animationStr,
    (reqs: animationStr) => void
  ] = useState([])

  const motionFeatures: MotionFeature[] = useAnimationFeatures(
    animationFeatures
  )
  return motionFeatures
}

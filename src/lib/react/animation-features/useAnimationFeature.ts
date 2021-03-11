import { useEffect, useContext } from 'react'
import { AnimationFeaturesContext, featureLookup } from './useAnimationContext'

export const useAnimationFeatures = (
  featureReqs: (keyof typeof featureLookup)[]
): void => {
  const importFeatures = useContext(AnimationFeaturesContext)

  useEffect(() => {
    importFeatures(featureReqs)
  }, [featureReqs])
}

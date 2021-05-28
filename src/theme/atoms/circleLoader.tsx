import { styled } from '@theme/stitches.config'
import {
  animate,
  m as motion,
  MotionValue,
  useMotionValue,
} from 'framer-motion'
import { useEffect } from 'react'

export interface CircleLoaderProps {
  progress?: MotionValue
}

const Svg = styled('svg', {})
const ProgressCircle = styled(motion.circle, {
  stroke: '$white',
})
const BackgroundCircle = styled('circle', {
  stroke: '$LA20',
})

export const CircleLoader: React.FC<CircleLoaderProps> = ({
  progress,
  ...props
}) => {
  const progressValue = progress || useMotionValue(0)
  useEffect(() => {
    if (!progress) {
      animate(progressValue, 100, { duration: 0.75, repeat: Infinity })
    }
  }, [])
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <BackgroundCircle cx="12" cy="12" r="10" strokeWidth="4" />
      <ProgressCircle
        cx="12"
        cy="12"
        r="10"
        strokeWidth="4"
        strokeDasharray="0 1"
        style={{ pathLength: 0.25, pathOffset: progressValue }}
      />
    </Svg>
  )
}

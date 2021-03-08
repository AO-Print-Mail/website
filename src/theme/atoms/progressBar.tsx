import { styled, CSS } from '..'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { AnimateSharedLayout, m as motion, MotionValue } from 'framer-motion'
import { useLayoutEffect } from 'react'

export interface ProgressBarProps {
  progress: number
  css?: CSS
}

const Bg = styled('div', {
  backgroundColor: '$N10',
  br: '$pill',
  height: '8px',
  overflow: 'hidden',
  position: 'relative',
  mx: '$6',
  my: '$2',
})

const Fill = styled(motion.div, {
  br: '$pill',
  backgroundColor: '$GA75',
  position: 'absolute',
  top: '0',
  width: '100%',
  left: '0',
  bottom: '0',
  willChange: 'transform',
})

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  ...props
}) => {
  useAnimationFeatures(['animation', 'animateLayout'])

  return (
    <Bg {...props}>
      <Fill layoutId="something" style={{ x: `-${100 - progress}%` }} />
    </Bg>
  )
}

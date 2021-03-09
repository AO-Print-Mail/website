import { styled, CSS } from '..'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { m as motion, MotionValue } from 'framer-motion'

export interface ProgressBarProps {
  progress: MotionValue<number>
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
  width: '100%',
})

const Fill = styled('div', {
  br: '$pill',
  backgroundColor: '$GA75',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  width: '100%',
  willChange: 'transform',
})

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  ...props
}) => {
  useAnimationFeatures(['animation'])

  return (
    <Bg {...props}>
      <Fill
        as={motion.div}
        initial={{ x: `-${100 - progress.getPrevious()}%` }}
        animate={{ x: `-${100 - progress.get()}%` }}
      />
    </Bg>
  )
}

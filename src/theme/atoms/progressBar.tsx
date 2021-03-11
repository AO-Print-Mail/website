import { styled, CSS } from '..'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { m as motion, MotionValue, MotionProps } from 'framer-motion'
import { useEffect, useState } from 'react'
import { set } from 'shelljs'

export interface ProgressBarProps extends MotionProps {
  progress: MotionValue<number>
  css?: CSS
  as: any
}

const Bg = styled('div', {
  backgroundColor: '$N10',
  br: '$pill',
  height: '8px',
  overflow: 'hidden',
  '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  position: 'relative',
  mx: '$4',
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
  const [{ newProgress, previousProgress }, setProgress] = useState({
    newProgress: 0,
    previousProgress: 0,
  })
  useAnimationFeatures(['animation'])
  useEffect(() => {
    const updateProgress = () =>
      setProgress({
        newProgress: progress.get(),
        previousProgress: progress.getPrevious(),
      })
    updateProgress()
    const listener = progress.onChange(updateProgress)
    return listener
  }, [])

  return (
    <Bg {...props}>
      <Fill
        as={motion.div}
        initial={{ x: `-${100 - previousProgress}%` }}
        animate={{ x: `-${100 - newProgress}%` }}
      />
    </Bg>
  )
}

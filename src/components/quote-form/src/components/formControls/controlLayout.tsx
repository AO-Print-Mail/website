import { StitchesVariants } from '@stitches/core'
import { TextHolder } from '@theme/atoms'
import { styled } from '@theme/stitches.config'
import { AnimationControls, m as motion, Variants } from 'framer-motion'
import React, { isValidElement } from 'react'

interface ControlLayoutProps {
  leftChild?: React.ReactNode
  rightChild?: React.ReactNode
  centerChild?: React.ReactNode
  bottomBorder?: boolean
  padding?: {
    padX: StitchesVariants<typeof TextHolder['padX']>
    padY: StitchesVariants<typeof TextHolder['padY']>
  }
}

const Background = styled(TextHolder, {
  display: 'flex',
  '& > *': {
    flex: '1 1',
    m: '$3',
    '@m': {
      m: '$4',
    },
    '@l': {
      m: '$5',
    },
  },
  '& > *:first-child:last-child': {
    flex: '0 0',
  },
})

const childAnimationVariants: Variants = {
  visible: {},
  hidden: {},
}

const childAnimationControls = {
  intitial: 'hidden',
}

function createMotionElementsWithControls(
  children: React.ReactNode,
  controls: AnimationControls
) {
  return React.Children.map(children, (child) => {
    if (isValidElement) {
      if (typeof child !== 'string') {
        //@ts-expect-error
        return React.cloneElement(motion(child), {})
      }
      return <motion.span>{child}</motion.span>
    }
  })
}

export const ControlLayout: React.FC<ControlLayoutProps> = ({
  padding,
  leftChild,
  rightChild,
  bottomBorder,
  centerChild,
}) => {
  const Left = createMotionElement(leftChild)
  const Right = createMotionElement(rightChild)
  const Center = createMotionElement(centerChild)
  return <Background {...padding}></Background>
}

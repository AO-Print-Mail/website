import { Flex, Box, UI3, styled, keyframes } from '@theme'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { useContext, useEffect } from 'react'
import { LayoutSpaceContext } from '@components/layout'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { m as motion } from 'framer-motion'

export interface FormWrapperProps {
  isOpen: boolean
  breakpoints: BreakpointsAry
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  toggleIsOpen: () => void
  changeStep: (a: string) => void
  formRef?: HTMLFormElement
}

const footerReveal = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0%)' },
})

const FormBackground = styled(motion.div, {
  //transform: 'translateY(100%)',
  //animation: `${footerReveal} 0.5s ease-out 2s forwards`,
  backgroundColor: '$white',
  position: 'fixed',
  display: 'block',
  zIndex: '$1',
  left: '0',
  bottom: '0',
  right: '0',
  boxShadow: '$footer',
  overflow: 'hidden',
  minHeight: '$7',
  btlr: '$5',
  btrr: '$5',
  transform: 'translateY(100%)',
  transition: 'transform 0.5s ease-out',
  when: {
    l: {
      transform: 'translateY(0%)',
      animation: 'none',
      minHeight: '$10',
      boxShadow: '$3',
      position: 'relative',
      br: '$5',
      ml: '$2',
      mr: '$2',
      mt: '$6',
      width: '50%',
    },
    xl: {
      width: 'calc(100% / 12 * 5 - 64px)',
    },
  },
})

const ContentContainer = styled('div', {
  display: 'none',
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
    },
  },
  when: {
    l: {
      display: 'block',
    },
  },
})
const Background = styled('div', {
  willChange: 'transform',
  background: '$white',
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
})

/*
Open the form so that it's full height
Then do whatever animation shows the inputs/intro
Keep the buttons at the bottom
*/

const variants = {
  hidden: (custom) =>
    custom
      ? {
          y: '100%',
        }
      : {},
  visible: (custom) =>
    custom
      ? {
          transform: 'translateY(0%)',
        }
      : {},
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  isOpen,
  breakpoints,
  children,
  ...props
}) => {
  useAnimationFeatures(['animation'])

  const isNotDesktop = !breakpoints.includes('l')

  return (
    <FormBackground
      variants={variants}
      animate="visible"
      custom={isNotDesktop}
      transition={{ delay: 3 }}
      {...props}
    >
      {children}
    </FormBackground>
  )
}

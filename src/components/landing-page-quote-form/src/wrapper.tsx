import { Flex, Box, UI3, styled, keyframes } from '@theme'
import type { BreakpointsAry } from '@lib/react/window-size'
import { useContext, useEffect } from 'react'
import { LayoutSpaceContext } from '@components/layout'
import { AnimationFeaturesContext } from '@lib/react/animation-features'

export interface FormWrapperProps {
  isOpen: boolean
  breakpoints: BreakpointsAry
  //showMenuToggle: boolean
  //progress: number
  //showBackButton: boolean
  //isSubmitting: boolean
  //buttonLabel: string
  //submittable: boolean
  //buttonType: 'submit' | 'primary'
  //toggleIsOpen: () => void
}

const footerReveal = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0%)' },
})

const FormBackground = styled('div', {
  transform: 'translateY(100%)',
  animation: `${footerReveal} 0.5s ease-out 2s forwards`,
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

export const FormWrapper: React.FC<FormWrapperProps> = ({
  isOpen,
  breakpoints,
  children,
  ...props
}) => {
  const setAnimationFeatures = useContext(AnimationFeaturesContext)

  const isNotDesktop = !breakpoints.includes('l')
  return <FormBackground {...props}>{children}</FormBackground>
}

import { styled } from '@theme'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { useAnimationFeatures } from '@lib/react/animation-features'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export interface FormWrapperProps {
  isOpen: boolean
  breakpoints: BreakpointsAry
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  toggleIsOpen: () => void
  changeStep: (a: string) => void
  formRef?: HTMLFormElement
}

const FormBackground = styled(motion.div, {
  position: 'fixed',
  display: 'block',
  zIndex: '$1',
  left: '0',
  bottom: '0',
  right: '0',
  minHeight: '$7',
  transform: 'translateY(100%)',
  transition: 'transform 0.5s ease-out',
  willChange: 'transform',
  when: {
    l: {
      transform: 'translateY(0%)',
      animation: 'none',
      minHeight: '$10',
      position: 'relative',
      ml: '$3',
      mr: '$3',
      mt: '$6',
      width: 'calc(50% - 48px)',
    },
    xl: {
      width: 'calc(100% / 12 * 5 - 64px)',
    },
  },
})

const variants = {
  visible: {
    transform: 'translateY(0%)',
  },
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  isOpen,
  breakpoints,
  children,
  ...props
}) => {
  const wrapperControls = useAnimation()

  const isNotDesktop = !breakpoints.includes('l')

  useEffect(() => {
    if (isNotDesktop) {
      wrapperControls.start('visible', { delay: 2 })
    }
  }, [])

  return (
    <FormBackground variants={variants} animate={wrapperControls} {...props}>
      {children}
    </FormBackground>
  )
}

import { m as motion } from 'framer-motion'
import { Box, styled, Container } from '@theme'
import type { BreakpointsAry } from '@lib/react/breakpoints'

interface StepWrapperProps {
  isSubmitting: boolean
  isOpen: boolean
  breakpoints: BreakpointsAry
  main: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  success: boolean
}

export const Background = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-end',
  position: 'relative',
  background: '$white',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  overflow: 'hidden',
  btlr: '$4',
  btrr: '$4',
  boxShadow: '$footer',
  variants: {
    isOpen: {
      true: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        btlr: '0',
        btrr: '0',
        '@l': { br: '$5', height: 'auto' },
      },
      false: { height: 'auto' },
    },
  },
  '@l': {
    br: '$5',
    boxShadow: '$3',
  },
})

const Content = styled('div', {
  flex: '1 1',
  alignSelf: 'center',
  mt: '$5',
  '@m': { mt: '$6' },
  variants: {
    isOpen: {
      true: {
        position: 'static',
      },
    },
  },
  '@l': {
    position: 'static',
    top: '$3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
  },
})

const SuccessBackground = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  background: '$green',
})

const contentContainerVariants = {
  open: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const StepWrapper: React.FC<StepWrapperProps> = ({
  isSubmitting,
  isOpen,
  breakpoints,
  main,
  header,
  footer,
  success,
  ...props
}) => {
  const isNotDesktop = !breakpoints.includes('l')
  return (
    <>
      {success && (
        <SuccessBackground
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      <Content as={motion.div} layout isOpen={isOpen}>
        {main}
      </Content>
      {footer && (
        <Container
          as={motion.div}
          layout
          css={{ maxWidth: '32rem', flex: '0 0' }}
        >
          {footer}
        </Container>
      )}
      {!success && header}
    </>
  )
}

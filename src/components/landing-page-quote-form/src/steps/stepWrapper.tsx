import { AnimatePresence, motion } from 'framer-motion'
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
        when: { l: { br: '$5', height: 'auto', bottom: 'unset' } },
      },
      false: { height: 'auto' },
    },
  },
  when: {
    l: {
      br: '$5',
      boxShadow: '$3',
    },
  },
})

const Content = styled('div', {
  flex: '1 1 100%',
  pt: '$3',
  height: '0px',
  position: 'absolute',
  top: '-100%',
  variants: {
    isOpen: {
      true: {
        position: 'static',
      },
    },
  },
  when: {
    l: {
      position: 'static',
      top: '$3',
    },
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

const contentChildrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
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
    <Background layout isOpen={isOpen} as={motion.div}>
      {success && (
        <SuccessBackground
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      <Content as={motion.div} layout isOpen={isOpen}>
        {header && <Box css={{ mb: '$4' }}>{header}</Box>}
        <motion.div layout>
          <Container
            animate={isNotDesktop ? (isOpen ? 'open' : 'closed') : undefined}
            as={motion.div}
            layout
            variants={contentContainerVariants}
            css={{
              maxWidth: '32rem',
              flex: '1',
              overflow: 'auto',
              minHeight: '0',
            }}
          >
            {main}
          </Container>
        </motion.div>
      </Content>
      {footer && (
        <Box as={motion.div} layout>
          <Container
            as={motion.div}
            layout
            css={{ maxWidth: '32rem', flex: '0 0' }}
          >
            {footer}
          </Container>
        </Box>
      )}
    </Background>
  )
}
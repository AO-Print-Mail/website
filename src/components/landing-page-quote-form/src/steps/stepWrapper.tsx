import { motion, AnimateSharedLayout } from 'framer-motion'
import { Box, styled, Container } from '@theme'
import type { BreakpointsAry } from '@lib/react/breakpoints'

interface StepWrapperProps {
  keyword?: string
  isSubmitting: boolean
  isOpen: boolean
  toggleIsOpen: () => void
  setSubmitting: (a: boolean) => void
  breakpoints: BreakpointsAry
  formFields: (any) => React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  onSubmit: (data: unknown) => void
  formName: string
}

const FormImage = styled('div', {
  display: 'block',
  position: 'absolute',
  height: '$12',
  alignSelf: 'flex-end',
  right: '-40px',
  top: '-40px',
  transition: 'opacity 0.4s',
  willChange: 'opacity',
  variants: {
    isOpen: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
})

const Background = styled('div', {
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
      true: { height: '100vh', when: { l: { height: 'auto' } } },
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
    },
  },
})

const contentContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
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
  keyword = 'direct mail',
  isSubmitting,
  toggleIsOpen,
  isOpen,
  setSubmitting,
  breakpoints,
  formFields,
  formName,
  header,
  footer,
  onSubmit,
  ...props
}) => {
  const isNotDesktop = !breakpoints.includes('l')
  return (
    <Box>
      <AnimateSharedLayout>
        <Background
          layoutId="inner-background"
          isOpen={isNotDesktop ? isOpen : true}
          as={motion.div}
          css={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'flex-end',
          }}
        >
          <Content as={motion.div} layout isOpen={isNotDesktop ? isOpen : true}>
            <Box>{header}</Box>
            <motion.div
              layout
              animate={isNotDesktop ? (isOpen ? 'open' : 'closed') : undefined}
            >
              <Container
                as={motion.form}
                id={formName}
                variants={contentContainerVariants}
                css={{ maxWidth: '40rem' }}
                onSubmit={onSubmit}
              >
                {formFields({
                  childrenAnimationVariants: contentChildrenVariants,
                })}
              </Container>
            </motion.div>
          </Content>
          <Box as={motion.div} layout>
            <Container css={{ maxWidth: '40rem' }}>{footer}</Container>
          </Box>
        </Background>
      </AnimateSharedLayout>
    </Box>
  )
}

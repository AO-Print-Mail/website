import {
  Box,
  Heading4,
  Paragraph3,
  MailIllustration,
  styled,
  Container,
  Close,
} from '@theme'
import { FormStepControls } from './formStepControls'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { Button } from '@components/button'

interface QuoteIntroProps {
  changeStep: (step: string) => unknown
  keyword?: string
  isSubmitting: boolean
  isOpen: boolean
  toggleIsOpen: () => void
  setSubmitting: (a: boolean) => void
  breakpoints: BreakpointsAry
}
import { motion, AnimateSharedLayout, useAnimation } from 'framer-motion'

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

const Background = styled(motion.div, {
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
  pt: '$10',
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

export const QuoteIntro: React.FC<QuoteIntroProps> = ({
  keyword = 'direct mail',
  changeStep,
  isSubmitting,
  toggleIsOpen,
  isOpen,
  setSubmitting,
  breakpoints,
  ...props
}) => {
  const isNotDesktop = !breakpoints.includes('l')
  return (
    <Box>
      <AnimateSharedLayout>
        <Background
          layoutId="inner-background"
          isOpen={isOpen}
          css={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'flex-end',
          }}
        >
          <Content as={motion.div} layout isOpen={isOpen}>
            <FormImage layout isOpen={isOpen} as={motion.div}>
              <MailIllustration
                layout
                as={motion.svg}
                css={{ height: '100%' }}
              />
            </FormImage>
            <motion.div layout animate={isOpen ? 'open' : 'closed'}>
              <Container
                as={motion.div}
                variants={contentContainerVariants}
                css={{ maxWidth: '40rem' }}
              >
                {isNotDesktop && (
                  <Button
                    size="small"
                    rightIcon={<Close css={{ color: '$N70' }} />}
                    style="naked"
                    color="dark"
                    css={{
                      ml: 'auto',
                      mt: '$3',
                      mb: '$5',
                      when: { l: { display: 'none' } },
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleIsOpen()
                    }}
                  >
                    Close
                  </Button>
                )}
                <Heading4
                  as={motion.h2}
                  alignCenter
                  color="primary"
                  css={{ mt: '$3' }}
                  variants={contentChildrenVariants}
                >
                  Get a {keyword} quote online
                </Heading4>
                <Paragraph3
                  as={motion.p}
                  alignCenter
                  css={{ color: '$DA70', mt: '$6' }}
                  variants={contentChildrenVariants}
                >
                  You can expect to receive a quote on the same day so that your
                  job can start asap.
                </Paragraph3>
                <Paragraph3
                  as={motion.p}
                  alignCenter
                  css={{ color: '$DA70' }}
                  variants={contentChildrenVariants}
                >
                  We’ll contact you to clarify any important details that help
                  us plan the right approach and best price.
                </Paragraph3>
              </Container>
            </motion.div>
          </Content>
          <Container css={{ maxWidth: '40rem' }}>
            <Box as={motion.div} layout>
              <FormStepControls
                isOpen={isNotDesktop && isOpen}
                isSubmitting={isSubmitting}
                buttonLabel={
                  isNotDesktop && isOpen ? 'Continue' : 'Start your quote'
                }
                buttonOnClick={(e: React.PointerEvent) => {
                  e.preventDefault()
                  if (!isOpen && isNotDesktop) {
                    toggleIsOpen()
                  } else {
                    changeStep('1')
                  }
                }}
                toggleIsOpen={toggleIsOpen}
              />
            </Box>
          </Container>
        </Background>
      </AnimateSharedLayout>
    </Box>
  )
}

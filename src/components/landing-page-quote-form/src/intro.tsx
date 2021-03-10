import {
  Flex,
  Box,
  Heading4,
  Paragraph3,
  MailIllustration,
  styled,
  Rotateable,
  Container,
} from '@theme'
import { Button, IconButton } from '@components/button'
import type { BreakpointsAry } from '@lib/react/breakpoints'

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
          isOpen={isNotDesktop ? isOpen : true}
          css={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'flex-end',
          }}
        >
          <Content as={motion.div} layout isOpen={isNotDesktop ? isOpen : true}>
            <FormImage
              layout
              isOpen={isNotDesktop ? isOpen : true}
              as={motion.div}
            >
              <MailIllustration
                layout
                as={motion.svg}
                css={{ height: '100%' }}
              />
            </FormImage>
            <motion.div
              layout
              animate={isNotDesktop ? (isOpen ? 'open' : 'closed') : undefined}
            >
              <Container
                as={motion.div}
                variants={contentContainerVariants}
                css={{ maxWidth: '40rem' }}
              >
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
          <Box as={motion.div} layout>
            <Container css={{ maxWidth: '40rem' }}>
              <Flex
                as={motion.div}
                css={{
                  pt: '$3',
                  flex: '0 0',
                  pb: '$4',
                  when: { l: { mx: '$6', pb: '$6' } },
                }}
              >
                <IconButton
                  label="Read more about online quotes"
                  onClick={(e: PointerEvent) => {
                    toggleIsOpen()
                  }}
                  icon={
                    <Rotateable
                      direction={isOpen ? 'down' : 'up'}
                      size="regular"
                    />
                  }
                  css={{
                    flex: '0.075 0',
                    mr: '$3',
                    when: { l: { display: 'none' } },
                    background: '$N15',
                  }}
                  color="subtle"
                ></IconButton>
                <Button
                  fullWidth
                  size="cta"
                  css={{
                    flex: '1',
                    when: {
                      l: {
                        mt: '$6',
                      },
                    },
                  }}
                  isLoading={isSubmitting}
                  onClick={(e: PointerEvent) => {
                    e.preventDefault()
                    setSubmitting(true)
                    toggleIsOpen()
                    changeStep('1')
                  }}
                >
                  Start your quote
                </Button>
              </Flex>
            </Container>
          </Box>
        </Background>
      </AnimateSharedLayout>
    </Box>
  )
}

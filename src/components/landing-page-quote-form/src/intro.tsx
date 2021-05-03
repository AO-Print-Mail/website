import {
  Box,
  Heading4,
  Paragraph,
  MailIllustration,
  styled,
  Container,
  Close,
} from '@theme'
import { FormStepControls } from './bottomBarControls'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { Button } from '@components/button'
import { Background } from './steps/stepWrapper'

interface QuoteIntroProps {
  changeStep: (step: string) => unknown
  keyword?: string
  isSubmitting: boolean
  isOpen: boolean
  toggleIsOpen: () => void
  setSubmitting: (a: boolean) => void
  breakpoints: BreakpointsAry
}
import { m as motion } from 'framer-motion'

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
        opacity: 0.5,
      },
    },
  },
})

const Content = styled('div', {
  flex: '1 1 100%',
  height: '0px',
  position: 'absolute',
  '-webkit-transform': 'translate3d(0,0,0)',
  top: '-100%',
  variants: {
    isOpen: {
      true: {
        position: 'static',
      },
    },
  },
  '@l': {
    position: 'static',
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
      <Background layout isOpen={isOpen} as={motion.div}>
        <FormImage layout isOpen={isOpen} as={motion.div}>
          <MailIllustration layout as={motion.svg} css={{ height: '100%' }} />
        </FormImage>
        <Content as={motion.div} layout isOpen={isOpen}>
          <motion.div layout animate={isOpen ? 'open' : 'closed'}>
            <Container
              css={{
                maxWidth: '32rem',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: '$4',
              }}
              layout
              as={motion.div}
            >
              <Button
                initial="hide"
                animate="show"
                size="small"
                rightIcon={<Close css={{ color: '$N80' }} />}
                style="naked"
                color={'dark'}
                css={{ '@l': { display: 'none' } }}
                onClick={(e) => {
                  e.preventDefault()
                  toggleIsOpen()
                }}
                as={motion.button}
              >
                Close
              </Button>
            </Container>

            <Container
              as={motion.div}
              variants={contentContainerVariants}
              css={{ maxWidth: '32rem', pt: '$10' }}
            >
              <Heading4
                as={motion.h2}
                alignCenter
                css={{ mt: '0' }}
                variants={contentChildrenVariants}
              >
                Get a {keyword} quote online
              </Heading4>
              <Paragraph
                as={motion.p}
                alignCenter
                css={{ color: '$DA70', mt: '$3' }}
                variants={contentChildrenVariants}
              >
                You can expect to receive a quote on the same day so that your
                job can start asap.
              </Paragraph>
              <Paragraph
                as={motion.p}
                alignCenter
                css={{ color: '$DA70' }}
                variants={contentChildrenVariants}
              >
                We’ll contact you to clarify any important details that help us
                plan the right approach and best price.
              </Paragraph>
            </Container>
          </motion.div>
        </Content>
        <Container css={{ maxWidth: '32rem', zIndex: '$1' }}>
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
    </Box>
  )
}

//TODO - skeleton screen
export const BlankSkeletonScreen = () => (
  <Box>
    <Background isOpen={true}>
      <FormImage isOpen={true}>
        <MailIllustration css={{ height: '100%' }} />
      </FormImage>
      <Content isOpen={true}>
        <Container
          css={{
            maxWidth: '32rem',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pt: '$4',
            height: '30rem',
          }}
        ></Container>
      </Content>
      <Container css={{ maxWidth: '32rem', zIndex: '$1' }}>
        <Box>
          <FormStepControls
            isOpen={true}
            isSubmitting={true}
            buttonLabel=""
            buttonOnClick={(e: React.PointerEvent) => {
              e.preventDefault()
            }}
            toggleIsOpen={() => undefined}
          />
        </Box>
      </Container>
    </Background>
  </Box>
)

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
interface QuoteIntroProps {
  changeStep: (step: string) => unknown
  keyword?: string
  isSubmitting: boolean
  isOpen: boolean
  toggleIsOpen: () => void
  setSubmitting: (a: boolean) => void
}
import { motion, AnimateSharedLayout } from 'framer-motion'

const FormImage = styled(MailIllustration, {
  display: 'block',
  position: 'absolute',
  height: '$12',
  alignSelf: 'flex-end',
  right: '-40px',
  top: '-40px',
})

const IntroContent = styled('div', {
  display: 'none',
  pt: '$10',
  when: {
    m: {
      display: 'block',
    },
  },
})

const ContentContainer = styled('div', {
  display: 'none',
  pt: '$10',
  variants: {
    isOpen: {
      true: {
        display: 'block',
        height: '100vh',
        when: {
          l: {
            height: 'auto',
          },
        },
      },
      false: {
        height: 'auto',
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
  position: 'absolute',
  background: '$white',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  boxShadow: '$footer',
  overflow: 'hidden',
  btrr: '$3',
  btlr: '$3',
  when: { l: { boxShadow: '$3', br: '$5' } },
})

export const QuoteIntro: React.FC<QuoteIntroProps> = ({
  keyword = 'direct mail',
  changeStep,
  isSubmitting,
  toggleIsOpen,
  isOpen,
  setSubmitting,
  ...props
}) => {
  return (
    <AnimateSharedLayout>
      <Background as={motion.div} layoutId="sadfa" />
      <Flex
        as={motion.div}
        layout
        column
        rel
        fillHeight
        css={{
          pb: '$4',
          when: {
            l: { pb: '$6' },
          },
        }}
      >
        <Container
          as={motion.section}
          css={{ px: '$3', when: { l: { px: '$6' } } }}
        >
          <ContentContainer as={motion.div} isOpen={isOpen}>
            <FormImage />
            <Heading4 as="h2" alignCenter color="primary" css={{ mt: '$3' }}>
              Get a {keyword} quote online
            </Heading4>
            <Paragraph3 alignCenter css={{ color: '$DA70' }}>
              You can expect to receive a quote on the same day so that your job
              can start asap.
            </Paragraph3>
            <Paragraph3 alignCenter css={{ color: '$DA70' }}>
              We’ll contact you to clarify any important details that help us
              plan the right approach and best price.
            </Paragraph3>
          </ContentContainer>
          <Flex css={{ pt: '$3', when: { l: { mx: '$6' } } }}>
            <IconButton
              label="Read more about online quotes"
              onClick={() => (e: PointerEvent) => {
                toggleIsOpen()
              }}
              icon={
                <Rotateable direction={isOpen ? 'down' : 'up'} size="regular" />
              }
              css={{
                flex: '0.075 0',
                mr: '$3',
                when: { l: { display: 'none' } },
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
                //e.preventDefault()
                //setSubmitting(true)
                toggleIsOpen()
                //changeStep('1')
              }}
            >
              Start your quote
            </Button>
          </Flex>
        </Container>
      </Flex>
    </AnimateSharedLayout>
  )
}

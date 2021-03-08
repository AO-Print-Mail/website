import {
  Flex,
  Box,
  Heading4,
  Paragraph3,
  MailIllustration,
  styled,
  Rotateable,
} from '@theme'
import { useEffect, useState } from 'react'
import { Button, IconButton } from '@components/button'
interface QuoteIntroProps {
  changeStep: (step: string) => unknown
  keyword?: string
  isSubmitting: boolean
  setProgress: (any) => void
  isOpen: boolean

  toggleIsOpen: () => void
}

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

export const QuoteIntro: React.FC<QuoteIntroProps> = ({
  keyword = 'direct mail',
  changeStep,
  isSubmitting,
  setProgress,
  toggleIsOpen,
  isOpen,
  ...props
}) => {
  return (
    <Flex
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
      <Box as="section" css={{ px: '$3', when: { l: { px: '$6' } } }}>
        <IntroContent>
          <FormImage />
          <Heading4 as="h2" alignCenter color="primary" css={{ mt: '$3' }}>
            Get a {keyword} quote online
          </Heading4>
          <Paragraph3 alignCenter css={{ color: '$DA70' }}>
            You can expect to receive a quote on the same day so that your job
            can start asap.
          </Paragraph3>
          <Paragraph3 alignCenter css={{ color: '$DA70' }}>
            We’ll contact you to clarify any important details that help us plan
            the right approach and best price.
          </Paragraph3>
        </IntroContent>
        <Flex css={{ pt: '$3', when: { l: { mx: '$6' } } }}>
          <IconButton
            label="Read more about online quotes"
            onClick={() => toggleIsOpen()}
            icon={
              <Rotateable direction={isOpen ? 'down' : 'up'} size="regular" />
            }
            css={{ flex: '0 0', mr: '$3', when: { l: { display: 'none' } } }}
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
            onClick={() => {
              toggleIsOpen()
              changeStep('1')
            }}
          >
            Start your quote
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

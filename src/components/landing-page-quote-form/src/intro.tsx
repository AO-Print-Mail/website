import { Flex, Box, Heading4, Paragraph3, MailIllustration } from '@theme'
import { Button } from '@components/button'
interface QuoteIntroProps {
  changeStep: (step: string) => unknown
  keyword?: string
}

export const QuoteIntro: React.FC<QuoteIntroProps> = ({
  keyword = 'direct mail',
  changeStep,
  ...props
}) => {
  return (
    <Flex column rel fillHeight css={{ pb: '$6' }}>
      <MailIllustration
        css={{
          display: 'block',
          height: '$12',
          position: 'relative',
          alignSelf: 'flex-end',
          right: '-40px',
          top: '-40px',
        }}
      />
      <Box as="section" css={{ px: '$6' }}>
        <Heading4 as="h2" alignCenter color="primary" css={{ mt: '$3' }}>
          Get a {keyword} quote online
        </Heading4>
        <Paragraph3 alignCenter css={{ color: '$DA70' }}>
          We’ll contact you to clarify any important details that help us plan
          the right approach and best price.
        </Paragraph3>
        <Paragraph3 alignCenter css={{ color: '$DA70' }}>
          You can expect to receive a quote on the same day so that your job can
          start asap.
        </Paragraph3>
        <Box css={{ mx: '$6', pt: '$3' }}>
          <Button
            fullWidth
            size="cta"
            css={{
              mt: '$6',
            }}
            onClick={() => changeStep('1')}
          >
            Start your quote
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

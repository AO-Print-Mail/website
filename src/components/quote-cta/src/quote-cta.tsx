import { styled, CSS, Card, Heading4, Paragraph3 } from '@theme'
import { Button } from '@components/button'

interface QuoteCtaProps {
  heading?: string
  paragraph?: string
  css?: CSS
}

const Bg = styled(Card, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  pt: '$5',
  pb: '$6',
  '@m': {
    px: '$5',
  },
  '@l': {
    py: '$6',
    px: '25%',
  },
})

export const QuoteCta: React.FC<QuoteCtaProps> = ({ heading, paragraph }) => {
  return (
    <Bg>
      <Heading4 alignCenter color="primary" css={{ mt: '$3' }}>
        {heading || 'Get a quote for your next job'}
      </Heading4>
      <Paragraph3 css={{ mt: '$2' }} alignCenter color="primary">
        {paragraph ||
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '}
      </Paragraph3>
      <Button
        css={{
          '@initial': { mt: '$4', minWidth: '75%', height: '$5' },
          '@s': { mt: '$5', minWidth: '50%' },
          '@m': { mt: '$6', minWidth: '$12' },
        }}
        type="primary"
      >
        Start your quote
      </Button>
    </Bg>
  )
}

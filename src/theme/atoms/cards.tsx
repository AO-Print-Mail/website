import { styled, CSS } from '@theme/stitches.config'

interface BlockQuoteProps {
  css?: CSS
  children?: React.ReactNode
}

export const FlatCard = styled('div', {
  backgroundColor: '$white',
  overflow: 'hidden',
  br: '$5',
  p: '$3',
  '@l': {
    p: '$4',
  },
})

export const Card = styled(FlatCard, {
  boxShadow: '$3',
})

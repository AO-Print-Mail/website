import { styled, css, CSS } from '..'

interface BlockQuoteProps {
  css?: CSS
  children?: React.ReactNode
}

export const Card = styled('div', {
  backgroundColor: '$white',
  boxShadow: '$3',
  br: '$5',
  p: '$3',
  '@l': {
    p: '$4',
  },
})
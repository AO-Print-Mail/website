import { styled, css, CSS } from '..'

interface BlockQuoteProps {
  cite?: string
  citeText?: string
  caption?: string
  children: React.ReactNode
}

const Wrapper = styled('div', {
  my: '$6',
  '@l': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '$4',
  },
})

const Background = styled('figure', {
  display: 'block',
  position: 'relative',
  background: '$DA05',
  borderWidth: '$thin',
  borderColor: '$DA20',
  borderStyle: 'solid',
  margin: '0',
  pb: '$5',
  pt: '$1',
  pl: '$5',
  pr: '$4',
  br: '$3',
  '@m': {
    display: 'inline-block',
  },
  '@l': {
    gridColumnStart: '1',
    gridColumnEnd: 'span 3',
  },
})

const Decoration = styled('div', {
  width: '8px',
  btlr: '$3',
  bblr: '$3',
  position: 'absolute',
  height: '100%',
  background: '$darkBlue',
  left: '0',
  top: '0',
})

export const BlockQuote: React.FC<BlockQuoteProps> = ({ children }) => {
  return (
    <Wrapper>
      <Background>
        <Decoration />
        {children}
      </Background>
    </Wrapper>
  )
}

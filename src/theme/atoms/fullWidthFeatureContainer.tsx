import Pattern from '@svg/cornerPatternDark.svg'
import { styled, Container } from '@theme'
import { CSS } from '@theme'

const Background = styled('div', {
  position: 'relative',
  background: '$N90',
  minHeight: '$10',
  pt: '$7',
  pb: '$6',
})

const BackgroundImage = styled(Pattern, {
  opacity: '0.8',
  position: 'absolute',
  pointerEvents: 'none',
  maxWidth: '100%',
  width: '75%',
  top: '0',
  left: '0',
  '@m': {
    width: '50%',
  },
  '@l': {
    width: 'auto',
    height: '$10',
  },
})

export interface FullWidthFeatureContainerProps {
  children?: React.ReactElement
  css?: CSS
}

export const FullWidthFeatureContainer: React.FC<FullWidthFeatureContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Background {...props}>
      <BackgroundImage />
      <Container>{children}</Container>
    </Background>
  )
}

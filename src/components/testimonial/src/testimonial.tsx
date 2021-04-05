import {
  styled,
  CSS,
  Heading6,
  Paragraph4,
  TextHolder,
  Container,
  Flex,
  Box,
  Column,
  ColumnWrapper,
} from '@theme'
import { Image, ResponsiveImageType } from 'react-datocms'
import Pattern from '@svg/cornerPatternDark.svg'

interface TestimonialProps {
  image: ResponsiveImageType
  name: string
  company: string
  testimonial: string
  css?: CSS
}

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
})

const Photo = styled(Image, {
  br: '50%',
  size: '$8',
  mr: '$3',
  '@m': {
    mr: '$4',
  },
  '@l': {
    size: '$9',
    m: '0',
  },
})

const ProfileWrapper = styled(Flex, {
  mt: '$6',
  '@l': {
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
})

const ProfileText = styled(Paragraph4, {
  mt: '$2',
  variants: {
    name: {
      true: {
        color: '$white',
        fontWeight: '600',
        mt: '$2',
      },
    },
  },
  '@l': {
    textAlign: 'center',
  },
})

const TestimonialTextHolder = styled(ColumnWrapper, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  '@l': {
    flexFlow: 'row-reverse nowrap',
    alignItems: 'flex-end',
    mb: '$6',
  },
})

const Quote = styled(Heading6, {
  color: '$white',
  mx: '0',
  p: '0',
  position: 'relative',
  '&:after': { content: '”', ml: '$1' },
  '&:before': { content: '“', ml: '$2', position: 'absolute', left: '-$4' },
})

export const Testimonial: React.FC<TestimonialProps> = ({
  testimonial,
  image,
  name,
  company,
  ...props
}) => {
  return (
    <Background {...props}>
      <BackgroundImage />
      <Container>
        <TestimonialTextHolder>
          <Column>
            <TextHolder>
              <Quote as="blockquote">{testimonial}</Quote>
            </TextHolder>
          </Column>
          <Column css={{ '@l': { flex: '0 0 25%' } }}>
            <TextHolder>
              <ProfileWrapper css={{ mt: '$6' }}>
                <Photo data={image} />
                <Box>
                  <ProfileText name>{name}</ProfileText>
                  <ProfileText color="light">{company}</ProfileText>
                </Box>
              </ProfileWrapper>
            </TextHolder>
          </Column>
        </TestimonialTextHolder>
      </Container>
    </Background>
  )
}

import {
  CSS,
  css,
  styled,
  Heading4,
  Paragraph4,
  Box,
  Container,
  Flex,
  ArrowForward,
  Card as CardBg,
  UI,
} from '@theme'
import { Image, ResponsiveImageType } from 'react-datocms'
import Link from 'next/link'

interface HomePageBodyProps {
  cardData: CardProps[]
  featureSections: React.ReactElement[]
  css?: CSS
}

interface CardProps {
  title?: string
  image?: ResponsiveImageType
  description?: string
  link?: string
  linkText?: string
  css?: CSS
}

interface LinkTextProps {
  text: any
  css?: CSS
}

const Arrow = styled(ArrowForward, {
  opacity: '1',
  willChange: 'transform',
  transition: 'transform 0.2s ease-out',
  color: '$blue',
  ml: '$2',
  alignSelf: 'center',
})

const LinkText: React.FC<LinkTextProps> = ({ text, css, ...props }) => {
  return (
    <Flex as="span" css={{ mt: '$4', flex: '0 0 100%', ...css }} {...props}>
      {/*@ts-ignore */}
      <UI size="4" className="linkText" css={{ color: '$blue' }}>
        {text}
      </UI>
      <Arrow className="arrowForward" />
    </Flex>
  )
}

const CardBackground = styled(CardBg, {
  display: 'flex',
  flexFlow: 'row wrap',
  position: 'relative',
  color: '$DBA70',
  height: '100%',
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  '&:hover': {
    transform: 'translateY(-2px)',
    '& .arrowForward': {
      transform: 'translateX($space$1)',
      color: '$B40',
    },
    '& .linkText': {
      color: '$B40',
    },
  },
  '@l': {
    flexFlow: 'column nowrap',
  },
})

const CardImage = styled(Image, {
  position: 'absolute !important',
  width: '33%',
  right: '$4',
  height: '$9',
  '@l': {
    position: 'relative !important',
    right: 'unset',
    width: 'unset',
    flex: '1 1 $sizes$10',
  },
  '@xl': {
    flexBasis: '$11',
  },
})
const Title = styled(Heading4, {
  fontSize: '$h6m',
  '@m': { fontSize: '$h6t' },
  '@l': { fontSize: '$h6d' },
  '@xl': { fontSize: '$h4d' },
})

const leftColumn = css({
  '@initial': { flexBasis: '60%', pr: '$2' },
  '@l': { flex: '1 1 auto', pr: '0' },
})

const Card: React.FC<CardProps> = ({
  description,
  image,
  link,
  linkText,
  title,
  ...props
}) => {
  return (
    <Box {...props}>
      <Link href={link || '#'}>
        <a style={{ textDecoration: 'none', color: 'unset' }}>
          <CardBackground>
            <Title className={leftColumn} color="primary" css={{ mt: '0' }}>
              {title || 'Direct Mail'}
            </Title>
            {image ? (
              <CardImage
                pictureStyle={{
                  objectFit: 'cover',
                }}
                data={image}
              />
            ) : (
              <CardImage as="div" css={{ backgroundColor: '$B10' }} />
            )}
            <Paragraph4
              className={leftColumn}
              css={{ color: 'inherit', mt: '$1' }}
            >
              {description ||
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            </Paragraph4>
            <LinkText text={linkText || 'Read more'} />
          </CardBackground>
        </a>
      </Link>
    </Box>
  )
}

const cards: CardProps[] = [
  { title: 'Direct Mail' },
  { title: 'Fulfilment' },
  { title: 'Printing' },
]

export const HomePageBody: React.FC<HomePageBodyProps> = ({
  cardData = cards,
  featureSections,
  ...props
}) => {
  return (
    <Box {...props}>
      <Container css={{ mt: '-$4' }}>
        <Box
          css={{
            '@m': {
              display: 'grid',
              gridTemplateAreas: `'card1 card2' 'contentleft card3' 'contentleft contentright'`,
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto 1fr',
              gridGap: '$3',
            },
            '@l': {
              gridTemplateAreas: `
              'contentleft contentleft contentleft contentleft contentleft card1 card1 card1 card2 card2 card2 .' 
              'contentleft contentleft contentleft contentleft contentleft . . . card3 card3 card3 .'
              'contentleft contentleft contentleft contentleft contentleft . contentright contentright contentright contentright contentright .'
              `,
              gridTemplateColumns:
                '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
              gridTemplateRows: 'auto auto 1fr',
              gridGap: '$3',
            },
          }}
        >
          {cardData.map((c, i) => {
            const gridArea = `card${i + 1}`
            return (
              <Card
                //@ts-expect-error
                css={{ '@initial': { gridArea, mt: '$3' }, '@m': { mt: '0' } }}
                key={c.title}
                {...c}
              />
            )
          })}
          <Box
            css={{
              gridArea: 'contentleft',
              mt: '$6',
            }}
          >
            {featureSections[0]}
          </Box>
          <Box
            css={{
              gridArea: 'contentright',
            }}
          >
            {featureSections[1]}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

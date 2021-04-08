import {
  Card as CardBg,
  Flex,
  UI3,
  ArrowForward,
  styled,
  CSS,
  Box,
  Heading6,
  Paragraph4,
} from '@theme'
import {
  Image,
  renderRule,
  ResponsiveImageType,
  StructuredText,
} from 'react-datocms'
import Link from 'next/link'
import { isParagraph } from 'datocms-structured-text-utils'

interface LinkCardProps {
  title?: string
  image?: ResponsiveImageType
  description?: unknown
  link?: string
  linkText?: string
  css?: CSS
}

interface LinkTextProps {
  text: string
  css?: CSS
}

const CardBackground = styled(CardBg, {
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
  color: '$DBA70',
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  minHeight: '100%',
  '&:hover': {
    transform: 'translateY(-$space$1)',
    cursor: 'pointer',
  },
})

const LinkText = styled(UI3, {
  color: '$blue',
  [`&:hover, ${CardBackground}:hover &`]: {
    color: '$B40',
  },
})

const Arrow = styled(ArrowForward, {
  opacity: '1',
  willChange: 'transform',
  transition: 'transform 0.2s ease-out',
  color: '$blue',
  ml: '$2',
  mt: '2px',
  [`&:hover, ${CardBackground}:hover &`]: {
    transform: 'translateX($space$1)',
    color: '$B40',
  },
})

const CtaLink: React.FC<LinkTextProps> = ({ text, css }) => {
  return (
    <Flex css={{ mt: '$4', ...css }}>
      <LinkText>{text}</LinkText>
      <Arrow />
    </Flex>
  )
}

const textRules = [
  renderRule(isParagraph, (node) => (
    <Paragraph4 css={{ color: 'inherit', mt: '$1' }} key={node.key}>
      {node.children}
    </Paragraph4>
  )),
]

const Title = styled(Heading6, {
  color: '$DBA90',
  mt: '$2',
  flex: '0 0',
})

const Spacer = styled('span', {
  display: 'block',
  flex: '0 0 $space$3',
})

const ImgWrapper = styled('div', {
  order: '-1',
  br: '$2',
  overflow: 'hidden',
})

const Img = styled(Image, {
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  [`${CardBackground}:hover &`]: {
    transform: 'scale(1.01)',
  },
})

const Summary = ({ data }) => {
  return <StructuredText data={data} customRules={textRules} />
}

export const LinkCard: React.FC<LinkCardProps> = ({
  description,
  image,
  link,
  linkText,
  title,
  ...props
}) => {
  return (
    <CardBackground {...props}>
      <Spacer />
      <Title as="h1">
        <a href={link} style={{ textDecoration: 'none', color: 'unset' }}>
          {title}
        </a>
      </Title>
      <Spacer />
      <Flex
        css={{
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          flex: '1 1',
        }}
      >
        <Summary data={description} />
        <CtaLink text="Read more" />
      </Flex>
      <ImgWrapper>
        <Img data={image} />
      </ImgWrapper>
    </CardBackground>
  )
}
